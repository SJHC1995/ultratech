param(
  [string]$Python = $env:ULTRATECH_PYTHON
)

$ErrorActionPreference = 'Stop'

if (-not $Python) {
  $candidates = @(
    (Get-Command python -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -ErrorAction SilentlyContinue),
    (Join-Path $env:LOCALAPPDATA 'Programs\Python\Python312\python.exe'),
    (Join-Path $env:LOCALAPPDATA 'Programs\Python\Python311\python.exe')
  ) | Where-Object { $_ -and (Test-Path $_) }
  $Python = $candidates | Select-Object -First 1
}

if (-not $Python) {
  throw 'Python 3.12+ was not found. Install it, then rerun this script with -Python <path>.'
}

& $Python -m pip install --upgrade argostranslate
if ($LASTEXITCODE -ne 0) {
  throw "Failed to install argostranslate (exit $LASTEXITCODE)."
}

@'
import argostranslate.package
import argostranslate.translate

argostranslate.package.update_package_index()
available = argostranslate.package.get_available_packages()
installed = argostranslate.translate.get_installed_languages()
installed_pairs = {
    (language.code, translation.to_lang.code)
    for language in installed
    for translation in language.translations
}

for source, target in (("en", "zh"), ("zh", "en")):
    if (source, target) in installed_pairs:
        print(f"Argos {source}->{target}: already installed")
        continue
    package = next((candidate for candidate in available if candidate.from_code == source and candidate.to_code == target), None)
    if package is None:
        raise RuntimeError(f"Argos model not found: {source}->{target}")
    print(f"Installing Argos {source}->{target} model...")
    argostranslate.package.install_from_path(package.download())
'@ | & $Python -

if ($LASTEXITCODE -ne 0) {
  throw "Failed to install offline Argos language models (exit $LASTEXITCODE)."
}

Write-Output 'Offline English↔Chinese Argos translation models are ready. No API key or token billing is used.'
