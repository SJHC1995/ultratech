/**
 * Project-owned, zero-token translation provider backed by local Argos models.
 *
 * Run scripts/install-offline-translation-models.ps1 once to install the
 * open-source English↔Chinese models. Translation then runs fully on-device.
 */
import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = process.cwd();
const WORKER = path.join(ROOT, "scripts", "offline_argos_translate.py");

async function executable(pathname) {
  try {
    await access(pathname, constants.X_OK);
    return pathname;
  } catch {
    return null;
  }
}

async function resolvePython() {
  const candidates = [
    process.env.ULTRATECH_PYTHON,
    process.env.PYTHON,
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Programs", "Python", "Python312", "python.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Programs", "Python", "Python311", "python.exe"),
    "python"
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (path.isAbsolute(candidate)) {
      const found = await executable(candidate);
      if (found) {
        return found;
      }
    } else {
      return candidate;
    }
  }
  throw new Error("Python 3.12+ was not found. Set ULTRATECH_PYTHON or run scripts/install-offline-translation-models.ps1.");
}

export async function translateMarkdownChunk({ markdown, from, to }) {
  const python = await resolvePython();
  return await new Promise((resolve, reject) => {
    const child = spawn(python, [WORKER], {
      cwd: ROOT,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true
    });
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (data) => { stdout += data; });
    child.stderr.on("data", (data) => { stderr += data; });
    child.once("error", (error) => reject(new Error(`Unable to start local Argos translation worker: ${error.message}`)));
    child.once("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Local Argos translation worker failed (exit ${code}): ${stderr.trim() || stdout.trim()}`));
        return;
      }
      try {
        const payload = JSON.parse(stdout);
        if (typeof payload.translation !== "string" || !payload.translation.trim()) {
          throw new Error("The local Argos translation worker returned no translation.");
        }
        resolve(payload.translation);
      } catch (error) {
        reject(new Error(`Unable to parse local Argos translation output: ${error.message}`));
      }
    });
    child.stdin.end(JSON.stringify({ markdown, from, to }));
  });
}
