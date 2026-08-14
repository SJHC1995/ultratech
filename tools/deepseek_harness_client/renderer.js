const targetUrl = 'http://127.0.0.1:3080/';
const content = document.getElementById('content');
const loading = document.getElementById('loading');
const serviceState = document.getElementById('serviceState');
const serviceDetail = document.getElementById('serviceDetail');
const serviceDot = document.getElementById('serviceDot');
const webState = document.getElementById('webState');
const footerStatus = document.getElementById('footerStatus');
const footerDot = document.getElementById('footerDot');
const keyInput = document.getElementById('apiKey');
const keyHint = document.getElementById('keyHint');
const balanceCard = document.getElementById('balanceCard');
const balanceLabel = document.getElementById('balanceLabel');
const balanceTime = document.getElementById('balanceTime');
const balanceDot = document.getElementById('balanceDot');
const followState = document.getElementById('followState');
const loadingTitle = document.getElementById('loadingTitle');
const loadingDetail = document.getElementById('loadingDetail');
const toast = document.getElementById('toast');
const diagnosticsDialog = document.getElementById('diagnosticsDialog');
const settingsDialog = document.getElementById('settingsDialog');
const firstRunDialog = document.getElementById('firstRunDialog');
const diagnosticsSummary = document.getElementById('diagnosticsSummary');
const diagnosticsLog = document.getElementById('diagnosticsLog');
const updateBanner = document.getElementById('updateBanner');
const updateBannerEyebrow = document.getElementById('updateBannerEyebrow');
const updateBannerTitle = document.getElementById('updateBannerTitle');
const updateBannerDetail = document.getElementById('updateBannerDetail');
const installUpdateButton = document.getElementById('installUpdate');
const updateDot = document.getElementById('updateDot');

let loaded = false;
let savedKey = false;
let balanceBusy = false;
let currentLanguage = 'zh';
let lastServiceState = 'checking';
let lastServiceSignature = '';
let webPreferenceSignature = '';
let toastTimer;
let pendingUpdate = null;

const strings = {
  zh: {
    controlTitle: '本地控制中心', service: '本地服务', restart: '启动服务', restartNow: '重新启动服务',
    openData: '打开数据目录', stepProbe: '检测本地端口', stepBoot: '启动 DSH Web', stepReady: '连接工作区',
    settingsDialog: '设置', settingsTitle: '本地设置', settingsDesc: '凭据仅保存在此设备', protected: '受保护',
    keyHint: '仅用于查询 DeepSeek API 余额，不会发送给本地 DSH 网页。', save: '安全保存本地设置',
    secure: 'API Key 由 Electron 主进程使用 Windows 安全存储加密保存。网页工作区无法读取此凭据。',
    webTitle: 'DeepSeek Harness 工作区', waitingKey: '余额：等待 API Key', keyNotConfigured: '余额：未配置 API Key', bootEyebrow: '本地运行环境',
    booting: '正在准备 DeepSeek Harness', waitingServer: '正在等待本地网页服务就绪', retry: '重新连接',
    connecting: '正在连接本地服务…', running: '运行中', starting: '启动中', checking: '检测中',
    offline: '未连接', failed: '服务异常', connected: '本地服务已连接', saved: '设置已安全保存，API Key 仅用于余额查询。',
    savedKey: '已安全保存的 API Key', keepKey: '已保存。留空并保存不会覆盖已有 API Key。',
    checkingBalance: '余额：查询中…', balance: '余额', available: '可用', unavailable: '不可用',
    themeLight: '浅色', themeDark: '深色', chinese: '中文', english: 'English',
    diagnostics: '系统诊断', clearLog: '清空服务日志', close: '关闭', diagnosticEmpty: '暂未产生服务日志。',
    serviceStarted: '本地服务已就绪。', serviceRetrying: '正在重新启动本地服务…', dataOpened: '已打开应用数据目录。',
    checkUpdate: '检查更新', installUpdate: '下载并安装', checkingUpdate: '正在检查更新', updateAvailable: '发现新版本', upToDate: '已是最新版本',
    downloadingUpdate: '正在下载更新', verifyingUpdate: '正在校验更新', installingUpdate: '正在安装更新', updateReady: '已准备好 v',
    updateFinished: '已更新到 v', updateFailed: '更新未完成',
    welcomeTitle: '欢迎使用', welcomeDesc: '只需三步，即可准备好本地 DeepSeek Harness 工作区。',
    welcomeStepOne: '确认本地服务', welcomeStepOneDesc: '程序会自动检测并启动 DSH Web。',
    welcomeStepTwo: '配置 API Key（可稍后）', welcomeStepTwoDesc: '仅用于安全查询余额，始终保存在本机。',
    welcomeStepThree: '开始工作', welcomeStepThreeDesc: '在右侧工作区直接使用 DeepSeek Harness。',
    welcomeLater: '稍后配置', welcomeStart: '开始配置',
  },
  en: {
    controlTitle: 'Local control center', service: 'Local service', restart: 'Start service', restartNow: 'Restart service',
    openData: 'Open data folder', stepProbe: 'Check local port', stepBoot: 'Start DSH Web', stepReady: 'Connect workspace',
    settingsDialog: 'Settings', settingsTitle: 'Local settings', settingsDesc: 'Credentials stay on this device', protected: 'Protected',
    keyHint: 'Used only for DeepSeek API balance queries. It is never sent to the local DSH web page.', save: 'Save local settings',
    secure: 'The Electron main process encrypts this API key with Windows secure storage. The web workspace cannot read it.',
    webTitle: 'DeepSeek Harness workspace', waitingKey: 'Balance: API key required', keyNotConfigured: 'Balance: API key not configured', bootEyebrow: 'Local runtime',
    booting: 'Preparing DeepSeek Harness', waitingServer: 'Waiting for the local web service', retry: 'Reconnect',
    connecting: 'Connecting to local service…', running: 'Running', starting: 'Starting', checking: 'Checking',
    offline: 'Offline', failed: 'Service error', connected: 'Local service connected', saved: 'Settings saved securely. The API key is used only for balance queries.',
    savedKey: 'API key stored securely', keepKey: 'Saved. Leave this field blank to retain the current API key.',
    checkingBalance: 'Balance: checking…', balance: 'Balance', available: 'available', unavailable: 'unavailable',
    themeLight: 'Light', themeDark: 'Dark', chinese: '中文', english: 'English',
    diagnostics: 'System diagnostics', clearLog: 'Clear service log', close: 'Close', diagnosticEmpty: 'No service log has been written yet.',
    serviceStarted: 'Local service is ready.', serviceRetrying: 'Restarting local service…', dataOpened: 'Application data folder opened.',
    checkUpdate: 'Check update', installUpdate: 'Download & install', checkingUpdate: 'Checking for updates', updateAvailable: 'Update available', upToDate: 'Up to date',
    downloadingUpdate: 'Downloading update', verifyingUpdate: 'Verifying update', installingUpdate: 'Installing update', updateReady: 'Ready: v',
    updateFinished: 'Updated to v', updateFailed: 'Update incomplete',
    welcomeTitle: 'Welcome', welcomeDesc: 'Prepare your local DeepSeek Harness workspace in three steps.',
    welcomeStepOne: 'Confirm local service', welcomeStepOneDesc: 'The client automatically detects and starts DSH Web.',
    welcomeStepTwo: 'Add an API key (optional)', welcomeStepTwoDesc: 'Used only for secure balance queries and kept on this device.',
    welcomeStepThree: 'Start working', welcomeStepThreeDesc: 'Use DeepSeek Harness directly in the workspace.',
    welcomeLater: 'Set up later', welcomeStart: 'Configure now',
  },
};

function t(key) {
  return strings[currentLanguage][key] || key;
}

function showToast(message, tone = 'info') {
  toast.textContent = message;
  toast.dataset.tone = tone;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3_600);
}

function applyLanguage(language) {
  currentLanguage = String(language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.getElementById('checkUpdate').title = t('checkUpdate');
  document.getElementById('checkUpdate').setAttribute('aria-label', t('checkUpdate'));
  document.getElementById('settingsButton').title = t('settingsDialog');
  document.getElementById('settingsButton').setAttribute('aria-label', t('settingsDialog'));
  if (savedKey) {
    keyInput.placeholder = t('savedKey');
    keyHint.textContent = t('keepKey');
  } else if (balanceCard.dataset.state === 'muted') {
    setBalance(t('keyNotConfigured'));
    balanceTime.textContent = '—';
  }
  updateServiceLabels(lastServiceState);
}

function setTheme(theme, language) {
  const normalizedTheme = String(theme).toLowerCase().includes('dark') ? 'dark' : 'light';
  const normalizedLanguage = String(language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const signature = `${normalizedTheme}:${normalizedLanguage}`;
  if (signature === webPreferenceSignature) return;
  webPreferenceSignature = signature;
  document.documentElement.dataset.theme = normalizedTheme;
  applyLanguage(normalizedLanguage);
  const languageName = currentLanguage === 'zh' ? t('chinese') : t('english');
  followState.textContent = `${currentLanguage === 'zh' ? '跟随网页' : 'Follows web'} · ${normalizedTheme === 'dark' ? t('themeDark') : t('themeLight')} · ${languageName}`;
}

function setBalance(text, tone = 'muted') {
  balanceLabel.textContent = text;
  balanceCard.dataset.state = tone;
  balanceDot.className = `status-dot ${tone}`;
}

function updateServiceLabels(state) {
  const labels = {
    checking: t('checking'),
    starting: t('starting'),
    online: t('running'),
    offline: t('offline'),
    error: t('failed'),
  };
  serviceState.textContent = labels[state] || t('checking');
}

function updateSteps(state) {
  const steps = [
    document.getElementById('stepProbe'),
    document.getElementById('stepBoot'),
    document.getElementById('stepReady'),
  ];
  const activeIndex = state === 'checking' ? 0 : (state === 'starting' ? 1 : 2);
  steps.forEach((node, index) => {
    node.dataset.state = state === 'error'
      ? (index === activeIndex ? 'error' : 'waiting')
      : (index < activeIndex ? 'done' : (index === activeIndex ? 'active' : 'waiting'));
    if (state === 'online') node.dataset.state = 'done';
  });
}

function setServiceVisual(status) {
  const state = status?.state || 'checking';
  const detail = status?.detail || t('connecting');
  const signature = `${state}|${detail}|${status?.endpoint || ''}`;
  if (signature === lastServiceSignature) return;
  lastServiceSignature = signature;
  lastServiceState = state;
  document.body.dataset.serviceState = state;
  updateServiceLabels(state);
  serviceDetail.textContent = detail;
  serviceDot.className = `status-dot ${state}`;
  footerDot.className = `status-dot ${state}`;
  footerStatus.textContent = state === 'online' ? t('connected') : detail;
  webState.textContent = state === 'online' ? 'LIVE' : state.toUpperCase();
  webState.dataset.state = state;
  updateSteps(state);
  document.getElementById('restartService').textContent = state === 'online' ? t('restartNow') : t('restart');

  const hasError = state === 'error';
  loading.classList.toggle('hidden', state === 'online');
  loading.classList.toggle('error', hasError);
  loadingTitle.textContent = hasError
    ? t('failed')
    : (state === 'offline' ? t('offline') : t('booting'));
  loadingDetail.textContent = status?.detail || t('waitingServer');
  if (state === 'online' && !loaded) {
    content.src = status.endpoint || targetUrl;
    loaded = true;
  }
}

function setUpdateVisual(status) {
  const state = status?.state || 'idle';
  const update = status?.update;
  const labels = {
    checking_update: t('checkingUpdate'),
    update_available: t('updateAvailable'),
    up_to_date: t('upToDate'),
    downloading_update: t('downloadingUpdate'),
    verifying_update: t('verifyingUpdate'),
    installing_update: t('installingUpdate'),
  };
  updateDot.dataset.state = state;
  if (state === 'up_to_date') {
    updateBanner.hidden = true;
    document.getElementById('checkUpdate').title = t('upToDate');
    showToast(t('upToDate'), 'success');
    return;
  }
  if (state === 'update_available' && update?.version) {
    pendingUpdate = update;
    updateBanner.hidden = false;
    updateBannerEyebrow.textContent = t('updateAvailable');
    updateBannerTitle.textContent = `${t('updateReady')}${update.version}`;
    updateBannerDetail.textContent = update.notes || (currentLanguage === 'zh' ? '已验证官方签名，更新将自动下载、校验并安装。' : 'The official signature has been verified. Download, validation and installation are automatic.');
    installUpdateButton.hidden = false;
    installUpdateButton.disabled = false;
    document.getElementById('checkUpdate').title = `${t('updateAvailable')} v${update.version}`;
    return;
  }
  if (['checking_update', 'downloading_update', 'verifying_update', 'installing_update'].includes(state)) {
    updateBanner.hidden = true;
    document.getElementById('checkUpdate').title = labels[state] || t('checkingUpdate');
    return;
  }
  if (state === 'failed') {
    updateBanner.hidden = false;
    updateBannerEyebrow.textContent = t('updateFailed');
    updateBannerTitle.textContent = t('updateFailed');
    updateBannerDetail.textContent = status.detail || '';
    installUpdateButton.hidden = true;
    document.getElementById('checkUpdate').title = t('updateFailed');
  }
}

async function readWebPreferences() {
  if (!loaded) return;
  try {
    const state = await content.executeJavaScript(
      `(() => {
        const root = document.documentElement;
        const body = document.body;
        const classes = [root.className, body && body.className].filter(Boolean).join(' ').toLowerCase();
        const attrTheme = [
          root.dataset.theme,
          root.dataset.colorScheme,
          root.getAttribute('data-color-mode'),
          root.getAttribute('data-theme-mode'),
          body && body.dataset.theme,
          body && body.getAttribute('data-theme'),
        ].find(Boolean);
        let stored = '';
        try {
          stored = Object.keys(localStorage)
            .filter((key) => /theme|color|appearance|lang|locale/i.test(key))
            .map((key) => String(localStorage.getItem(key) || ''))
            .join(' ');
        } catch {}
        const source = [attrTheme, classes, stored].filter(Boolean).join(' ').toLowerCase();
        const theme = /dark|night|black/.test(source)
          ? 'dark'
          : (/light|day|white/.test(source) ? 'light' : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
        const language = root.lang || (body && body.lang) || navigator.language || 'zh-CN';
        return { theme, lang: /(^|[^a-z])zh|cn|chinese/i.test(language + ' ' + stored) ? 'zh-CN' : language };
      })()`,
      true,
    );
    setTheme(state.theme, state.lang);
  } catch {
    // The webview may be navigating or not ready yet.
  }
}

async function loadSettings() {
  const settings = await window.desktop.getSettings();
  savedKey = settings.hasApiKey;
  if (savedKey) {
    keyInput.placeholder = t('savedKey');
    keyHint.textContent = t('keepKey');
    refreshBalance();
  } else {
    setBalance(t('keyNotConfigured'));
    balanceTime.textContent = '—';
  }
  if (!settings.onboardingComplete) {
    setTimeout(() => {
      if (!firstRunDialog.open) firstRunDialog.showModal();
    }, 420);
  }
}

async function pollServer() {
  try {
    setServiceVisual(await window.desktop.backendStatus());
  } catch (error) {
    setServiceVisual({ state: 'error', detail: error.message, endpoint: targetUrl });
  }
}

function refreshPage() {
  if (loaded) {
    content.reload();
    showToast(currentLanguage === 'zh' ? '正在刷新工作区…' : 'Refreshing workspace…');
  }
}

function formatBalance(data) {
  const list = Array.isArray(data.balance_infos) ? data.balance_infos : [];
  if (!list.length) throw new Error(currentLanguage === 'zh' ? '未返回余额信息' : 'No balance information returned');
  const item = list.find((entry) => entry.currency === 'CNY') || list[0];
  const amount = item.total_balance ?? item.balance ?? '—';
  const availability = data.is_available === false ? t('unavailable') : t('available');
  return `${t('balance')} ${item.currency || 'CNY'} ${amount} · ${availability}`;
}

async function refreshBalance() {
  if (balanceBusy) return;
  if (!savedKey) {
    setBalance(t('keyNotConfigured'));
    balanceTime.textContent = '—';
    return;
  }
  balanceBusy = true;
  setBalance(t('checkingBalance'), 'checking');
  try {
    const data = await window.desktop.queryBalance();
    setBalance(formatBalance(data), 'online');
    balanceTime.textContent = new Date().toLocaleTimeString(
      currentLanguage === 'zh' ? 'zh-CN' : 'en-US',
      { hour: '2-digit', minute: '2-digit', second: '2-digit' },
    );
  } catch (error) {
    setBalance(`${t('balance')}：${error.message}`, 'error');
  } finally {
    balanceBusy = false;
  }
}

async function restartService() {
  showToast(t('serviceRetrying'));
  setServiceVisual({ state: 'starting', detail: t('serviceRetrying'), endpoint: targetUrl });
  try {
    setServiceVisual(await window.desktop.restartBackend());
  } catch (error) {
    setServiceVisual({ state: 'error', detail: error.message, endpoint: targetUrl });
  }
}

async function showDiagnostics() {
  const data = await window.desktop.diagnostics();
  const rows = [
    `服务状态：${data.service.state}`,
    `状态说明：${data.service.detail}`,
    `服务 PID：${data.service.pid ?? '—'}`,
    `应用版本：${data.appVersion}`,
    `Electron：${data.electronVersion} · Node.js：${data.nodeVersion}`,
    `平台：${data.platform}`,
    `数据目录：${data.userData}`,
    `日志文件：${data.logPath}`,
  ];
  diagnosticsSummary.textContent = rows.join('\n');
  diagnosticsLog.textContent = data.logTail || t('diagnosticEmpty');
  diagnosticsDialog.showModal();
}

async function checkForUpdate() {
  try {
    setUpdateVisual({ state: 'checking_update', detail: t('checkingUpdate') });
    const info = await window.desktop.checkForUpdate();
    setUpdateVisual({
      state: info.available ? 'update_available' : 'up_to_date',
      detail: info.available ? `v${info.version}` : '',
      update: info,
    });
  } catch (error) {
    setUpdateVisual({ state: 'failed', detail: error.message });
    showToast(error.message, 'error');
  }
}

async function installUpdate() {
  if (!pendingUpdate) return;
  installUpdateButton.disabled = true;
  try {
    await window.desktop.installUpdate(pendingUpdate);
  } catch (error) {
    installUpdateButton.disabled = false;
    setUpdateVisual({ state: 'failed', detail: error.message });
    showToast(error.message, 'error');
  }
}

async function completeOnboarding(openSettings = false) {
  try {
    await window.desktop.completeOnboarding();
  } finally {
    firstRunDialog.close();
    if (openSettings) settingsDialog.showModal();
  }
}

content.addEventListener('dom-ready', readWebPreferences);
content.addEventListener('did-navigate-in-page', readWebPreferences);
content.addEventListener('did-fail-load', (_event, code, description) => {
  if (code !== -3) setServiceVisual({ state: 'error', detail: `工作区加载失败：${description}`, endpoint: targetUrl });
});
document.getElementById('openBrowser').onclick = () => window.desktop.openHarness();
document.getElementById('refreshPage').onclick = refreshPage;
document.getElementById('settingsButton').onclick = () => settingsDialog.showModal();
document.getElementById('skipOnboarding').onclick = () => completeOnboarding(false);
document.getElementById('startOnboarding').onclick = () => completeOnboarding(true);
document.getElementById('restartService').onclick = restartService;
document.getElementById('retryService').onclick = restartService;
document.getElementById('openDataFolder').onclick = async () => {
  await window.desktop.openDataFolder();
  showToast(t('dataOpened'));
};
document.getElementById('refreshBalance').onclick = refreshBalance;
document.getElementById('toggleKey').onclick = () => {
  keyInput.type = keyInput.type === 'password' ? 'text' : 'password';
};
document.getElementById('saveSettings').onclick = async () => {
  try {
    const next = await window.desktop.saveSettings({ apiKey: keyInput.value });
    savedKey = next.hasApiKey;
    keyInput.value = '';
    keyInput.placeholder = savedKey ? t('savedKey') : 'sk-…';
    keyHint.textContent = t('saved');
    showToast(t('saved'), 'success');
    if (savedKey) refreshBalance();
  } catch (error) {
    keyHint.textContent = error.message;
    showToast(error.message, 'error');
  }
};
document.getElementById('diagnosticsButton').onclick = showDiagnostics;
document.getElementById('checkUpdate').onclick = checkForUpdate;
installUpdateButton.onclick = installUpdate;
document.getElementById('clearLog').onclick = async () => {
  const data = await window.desktop.clearServiceLog();
  diagnosticsLog.textContent = data.logTail || t('diagnosticEmpty');
  showToast(currentLanguage === 'zh' ? '服务日志已清空。' : 'Service log cleared.');
};

window.desktop.onBackendStatus(setServiceVisual);
window.desktop.onUpdateStatus(setUpdateVisual);
loadSettings();
pollServer();
let updateResultRetryCount = 0;
async function surfacePreviousUpdateResult() {
  const result = await window.desktop.previousUpdateResult();
  if (!result && updateResultRetryCount < 16) {
    updateResultRetryCount += 1;
    setTimeout(() => surfacePreviousUpdateResult().catch(() => {}), 750);
    return;
  }
  if (!result) return;
  if (result.status === 'success') {
    showToast(`${t('updateFinished')}${result.target_version}`, 'success');
  } else {
    setUpdateVisual({ state: 'failed', detail: result.detail || t('updateFailed') });
  }
}
surfacePreviousUpdateResult().catch(() => {});
setInterval(pollServer, 5_000);
setInterval(readWebPreferences, 700);
setInterval(() => { if (savedKey) refreshBalance(); }, 60_000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    pollServer();
    readWebPreferences();
    if (savedKey) refreshBalance();
  }
});
