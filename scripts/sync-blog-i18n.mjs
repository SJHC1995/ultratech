#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const DOCS_DIRECTORY = path.join(ROOT, "docs");
const I18N_DIRECTORY = path.join(DOCS_DIRECTORY, "i18n");
const MANIFEST_PATH = path.join(I18N_DIRECTORY, "manifest.json");
const DEFAULT_TRANSLATOR_PLUGIN = "scripts/translation-plugins/offline-argos-translator.mjs";
const SUPPORTED_LOCALES = new Set(["en", "zh-CN"]);
const TRANSLATION_HEADER = /^<!--\s*ultratech-i18n:\s*(\{.*?\})\s*-->\s*/s;
const MAX_CHUNK_CHARS = 12_000;

function usage() {
  console.log(`
Usage:
  node scripts/sync-blog-i18n.mjs --check
  node scripts/sync-blog-i18n.mjs --translate --from en --to zh-CN
  node scripts/sync-blog-i18n.mjs --translate --from zh-CN --to en

Options:
  --check                 Scan source Markdown and regenerate docs/i18n/manifest.json.
  --translate             Translate every detected source document for the requested direction.
  --from <en|zh-CN>       Source language for --translate.
  --to <en|zh-CN>         Target language for --translate.
  --max-docs <number>     Translate at most this many documents (useful for a pilot batch).
  --force                 Rebuild translations even when their source hash still matches.
  --dry-run               Report work without writing Markdown translations or the manifest.
  --model <name>          Optional provider-specific model override.
  --plugin <path>         Hand-written translation plugin; defaults to ${DEFAULT_TRANSLATOR_PLUGIN}.

The default hand-written plugin uses local Argos open-source models. Run
scripts/install-offline-translation-models.ps1 once to download the models; later
translation consumes no API tokens or hosted-translation credits. Source documents
are never modified: generated translations are written beneath
docs/i18n/<target-locale>/ and tracked in the manifest.
`);
}

function parseArgs(argv) {
  const options = {
    check: false,
    translate: false,
    from: null,
    to: null,
    maxDocs: Number.POSITIVE_INFINITY,
    force: false,
    dryRun: false,
    model: process.env.ULTRATECH_TRANSLATION_MODEL || "auto",
    plugin: DEFAULT_TRANSLATOR_PLUGIN
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    const value = () => {
      const next = argv[index + 1];
      if (!next || next.startsWith("--")) {
        throw new Error(`${argument} requires a value.`);
      }
      index += 1;
      return next;
    };

    if (argument === "--check") options.check = true;
    else if (argument === "--translate") options.translate = true;
    else if (argument === "--from") options.from = value();
    else if (argument === "--to") options.to = value();
    else if (argument === "--max-docs") {
      options.maxDocs = Number(value());
      if (!Number.isInteger(options.maxDocs) || options.maxDocs < 1) {
        throw new Error("--max-docs must be a positive integer.");
      }
    } else if (argument === "--force") options.force = true;
    else if (argument === "--dry-run") options.dryRun = true;
    else if (argument === "--model") options.model = value();
    else if (argument === "--plugin") options.plugin = value();
    else if (argument === "--help" || argument === "-h") {
      usage();
      process.exit(0);
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  if (!options.check && !options.translate) {
    options.check = true;
  }
  if (options.translate) {
    if (!SUPPORTED_LOCALES.has(options.from) || !SUPPORTED_LOCALES.has(options.to) || options.from === options.to) {
      throw new Error("--translate requires different supported --from and --to locales (en, zh-CN).");
    }
  }
  return options;
}

function normalizeNewlines(value) {
  return value.replace(/\r\n/g, "\n");
}

function sourceHash(markdown) {
  return createHash("sha256").update(normalizeNewlines(markdown), "utf8").digest("hex");
}

function markdownForLanguageDetection(markdown) {
  return normalizeNewlines(markdown)
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "");
}

function detectLanguage(markdown) {
  const readable = markdownForLanguageDetection(markdown);
  const hanCharacters = (readable.match(/[\p{Script=Han}]/gu) || []).length;
  const latinWords = (readable.match(/\b[A-Za-z][A-Za-z'-]{2,}\b/g) || []).length;

  if (hanCharacters >= 80 && hanCharacters >= latinWords * 0.45) {
    return "zh-CN";
  }
  if (latinWords >= 80 && hanCharacters <= latinWords * 0.15) {
    return "en";
  }
  return "mixed";
}

async function walkMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "i18n") {
      continue;
    }
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkMarkdown(absolute));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(absolute);
    }
  }
  return files.sort((left, right) => left.localeCompare(right));
}

function relativeDocPath(absolutePath) {
  return path.relative(ROOT, absolutePath).split(path.sep).join("/");
}

function translationPath(sourceFile, targetLocale) {
  const sourceRelative = path.relative(DOCS_DIRECTORY, sourceFile);
  return path.join(I18N_DIRECTORY, targetLocale, sourceRelative);
}

async function readTranslationMetadata(file) {
  try {
    const content = await readFile(file, "utf8");
    const match = TRANSLATION_HEADER.exec(content);
    if (!match) {
      return null;
    }
    return JSON.parse(match[1]);
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

function outputHeader(metadata) {
  return `<!-- ultratech-i18n: ${JSON.stringify(metadata)} -->\n\n`;
}

function splitMarkdown(markdown) {
  const lines = normalizeNewlines(markdown).split("\n");
  const chunks = [];
  let chunk = [];
  let chunkLength = 0;
  let inFence = false;

  const flush = () => {
    if (chunk.length) {
      chunks.push(chunk.join("\n"));
      chunk = [];
      chunkLength = 0;
    }
  };

  for (const line of lines) {
    const lineLength = line.length + 1;
    const headingBoundary = /^#{1,4}\s+/.test(line);
    const safeBoundary = !inFence && (headingBoundary || !line.trim());
    if (chunkLength + lineLength > MAX_CHUNK_CHARS && (!inFence || safeBoundary)) {
      flush();
    }
    chunk.push(line);
    chunkLength += lineLength;
    if (/^```/.test(line)) {
      inFence = !inFence;
    }
  }
  flush();

  if (chunks.some((chunkText) => chunkText.length > MAX_CHUNK_CHARS)) {
    throw new Error("A Markdown block exceeds the translation chunk limit; split the source document at a heading or paragraph boundary.");
  }
  return chunks;
}

function translationInstructions(from, to) {
  const sourceName = from === "en" ? "English" : "Simplified Chinese";
  const targetName = to === "en" ? "English" : "Simplified Chinese";
  return [
    `Translate this UltraTech Markdown document from ${sourceName} to ${targetName}.`,
    "Return only translated Markdown: do not add commentary, code fences, or a title that was not in the source.",
    "Preserve Markdown structure, heading levels, tables, list nesting, inline code, fenced code, URLs, file names, mod IDs, item IDs, commands, versions, numeric values, and placeholders exactly.",
    "Translate prose, titles, captions, and link labels naturally. Keep product names and established technical terms when translating them would reduce clarity."
  ].join(" ");
}

async function loadTranslator(pluginPath) {
  const resolvedPath = path.resolve(ROOT, pluginPath);
  const plugin = await import(pathToFileURL(resolvedPath).href);
  if (typeof plugin.translateMarkdownChunk !== "function") {
    throw new Error(`Translation plugin ${pluginPath} must export translateMarkdownChunk({ markdown, from, to, model, instructions }).`);
  }
  return plugin;
}

async function translateDocument(markdown, from, to, model, translator) {
  const chunks = splitMarkdown(markdown);
  const translatedChunks = [];
  for (let index = 0; index < chunks.length; index += 1) {
    console.log(`  translating chunk ${index + 1}/${chunks.length}`);
    translatedChunks.push(await translator.translateMarkdownChunk({
      markdown: chunks[index],
      from,
      to,
      model,
      instructions: translationInstructions(from, to)
    }));
  }
  return translatedChunks.join("\n");
}

async function scanSourceDocuments() {
  const files = await walkMarkdown(DOCS_DIRECTORY);
  const documents = [];
  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    documents.push({
      file,
      source: relativeDocPath(file),
      markdown,
      sha256: sourceHash(markdown),
      language: detectLanguage(markdown)
    });
  }
  return documents;
}

async function buildManifest(documents) {
  const records = [];
  for (const document of documents) {
    const translations = {};
    const staleTranslations = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale === document.language) {
        continue;
      }
      const output = translationPath(document.file, locale);
      const metadata = await readTranslationMetadata(output);
      if (!metadata) {
        continue;
      }
      const publicPath = relativeDocPath(output);
      if (
        metadata.source === document.source
        && metadata.sourceSha256 === document.sha256
        && metadata.sourceLanguage === document.language
        && metadata.targetLanguage === locale
      ) {
        translations[locale] = publicPath;
      } else {
        staleTranslations[locale] = publicPath;
      }
    }
    records.push({
      source: document.source,
      language: document.language,
      translations,
      ...(Object.keys(staleTranslations).length ? { staleTranslations } : {})
    });
  }

  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    documents: records
  };
}

async function writeManifest(manifest, dryRun) {
  if (dryRun) {
    console.log(`Would write ${relativeDocPath(MANIFEST_PATH)}.`);
    return;
  }
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const documents = await scanSourceDocuments();
  const languageCounts = documents.reduce((counts, document) => {
    counts[document.language] = (counts[document.language] || 0) + 1;
    return counts;
  }, {});
  console.log(`Scanned ${documents.length} Markdown source documents: ${Object.entries(languageCounts).map(([language, count]) => `${language}=${count}`).join(", ")}.`);

  if (options.translate) {
    const translator = options.dryRun ? null : await loadTranslator(options.plugin);
    const candidates = documents
      .filter((document) => document.language === options.from)
      .slice(0, options.maxDocs);
    console.log(`Selected ${candidates.length} ${options.from} source documents for ${options.to} translation.`);

    for (const document of candidates) {
      const output = translationPath(document.file, options.to);
      const existingMetadata = await readTranslationMetadata(output);
      const current = existingMetadata
        && existingMetadata.source === document.source
        && existingMetadata.sourceSha256 === document.sha256
        && existingMetadata.sourceLanguage === options.from
        && existingMetadata.targetLanguage === options.to;
      if (current && !options.force) {
        console.log(`Skipping current translation: ${document.source}`);
        continue;
      }

      console.log(`Translating ${document.source} -> ${relativeDocPath(output)}`);
      if (options.dryRun) {
        continue;
      }
      const translated = await translateDocument(document.markdown, options.from, options.to, options.model, translator);
      const metadata = {
        source: document.source,
        sourceSha256: document.sha256,
        sourceLanguage: options.from,
        targetLanguage: options.to,
        generatedAt: new Date().toISOString(),
        model: options.model
      };
      await mkdir(path.dirname(output), { recursive: true });
      await writeFile(output, `${outputHeader(metadata)}${translated}\n`, "utf8");
    }
  }

  const refreshedDocuments = await scanSourceDocuments();
  const manifest = await buildManifest(refreshedDocuments);
  await writeManifest(manifest, options.dryRun);
  const translatedCount = manifest.documents.filter((document) => Object.keys(document.translations).length > 0).length;
  const englishCount = manifest.documents.filter((document) => document.language === "en").length;
  console.log(`Manifest: ${translatedCount} translated source documents; ${englishCount} English source documents.`);
}

main().catch((error) => {
  console.error(`i18n sync failed: ${error.message}`);
  process.exitCode = 1;
});
