"""Translate UltraTech Markdown with locally installed Argos Translate models."""

import json
import re
import sys

import argostranslate.translate


LANGUAGE_CODES = {"en": "en", "zh-CN": "zh"}
INLINE_PATTERN = re.compile(r"(`[^`]*`|\[[^\]]*]\([^)]+\)|https?://\S+)")
LINK_PATTERN = re.compile(r"^\[([^\]]*)\]\(([^)]+)\)$")
PREFIX_PATTERN = re.compile(r"^(\s*(?:#{1,6}\s+|>\s*|[-*+]\s+|\d+\.\s+)?)(.*)$")

sys.stdin.reconfigure(encoding="utf-8")
sys.stdout.reconfigure(encoding="utf-8")


def translation_for(source, target):
    source_code = LANGUAGE_CODES.get(source)
    target_code = LANGUAGE_CODES.get(target)
    if not source_code or not target_code:
        raise ValueError(f"Unsupported local translation direction: {source} -> {target}")

    installed = argostranslate.translate.get_installed_languages()
    source_language = next((language for language in installed if language.code == source_code), None)
    target_language = next((language for language in installed if language.code == target_code), None)
    if not source_language or not target_language:
        raise RuntimeError("Required Argos language models are not installed. Run scripts/install-offline-translation-models.ps1 once.")

    try:
        return source_language.get_translation(target_language)
    except Exception as error:
        raise RuntimeError("Required Argos language pair is not installed. Run scripts/install-offline-translation-models.ps1 once.") from error


def translate_text(value, translator):
    if not value.strip() or re.fullmatch(r"[-:| ]+", value) or re.fullmatch(r"https?://\S+", value):
        return value

    output = []
    cursor = 0
    for match in INLINE_PATTERN.finditer(value):
        if match.start() > cursor:
            output.append(translate_plain(value[cursor:match.start()], translator))
        token = match.group(0)
        link = LINK_PATTERN.match(token)
        if link:
            output.append(f"[{translate_plain(link.group(1), translator)}]({link.group(2)})")
        else:
            output.append(token)
        cursor = match.end()
    if cursor < len(value):
        output.append(translate_plain(value[cursor:], translator))
    return "".join(output)


def translate_plain(value, translator):
    if not value.strip():
        return value
    leading = re.match(r"^\s*", value).group(0)
    trailing = re.search(r"\s*$", value).group(0)
    return f"{leading}{translator.translate(value.strip())}{trailing}"


def translate_line(line, translator, in_fence):
    if in_fence or line.startswith("```"):
        return line

    if "|" in line and re.fullmatch(r"\s*\|?.+\|.+\|?\s*", line) and not re.fullmatch(r"\s*\|?[\s:|-]+\|[\s:|-]+", line):
        has_leading = line.lstrip().startswith("|")
        has_trailing = line.rstrip().endswith("|")
        cells = line.strip().strip("|").split("|")
        translated_cells = [translate_text(cell, translator) for cell in cells]
        return f"{'|' if has_leading else ''}{'|'.join(translated_cells)}{'|' if has_trailing else ''}"

    prefix_match = PREFIX_PATTERN.match(line)
    return f"{prefix_match.group(1)}{translate_text(prefix_match.group(2), translator)}"


def translate_markdown(markdown, source, target):
    translator = translation_for(source, target)
    output = []
    in_fence = False
    for line in markdown.replace("\r\n", "\n").split("\n"):
        output.append(translate_line(line, translator, in_fence))
        if line.startswith("```"):
            in_fence = not in_fence
    return "\n".join(output)


def main():
    request = json.load(sys.stdin)
    translation = translate_markdown(request["markdown"], request["from"], request["to"])
    json.dump({"translation": translation}, sys.stdout, ensure_ascii=False)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
