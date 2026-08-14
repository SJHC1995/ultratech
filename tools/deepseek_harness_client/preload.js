const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktop', {
  openHarness: () => ipcRenderer.invoke('open-harness'),
  backendStatus: () => ipcRenderer.invoke('backend-status'),
  startBackend: () => ipcRenderer.invoke('start-backend'),
  restartBackend: () => ipcRenderer.invoke('restart-backend'),
  getSettings: () => ipcRenderer.invoke('get-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  queryBalance: () => ipcRenderer.invoke('query-balance'),
  diagnostics: () => ipcRenderer.invoke('get-diagnostics'),
  openDataFolder: () => ipcRenderer.invoke('open-data-folder'),
  clearServiceLog: () => ipcRenderer.invoke('clear-service-log'),
  onBackendStatus: (callback) => {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on('backend-status-changed', listener);
    return () => ipcRenderer.removeListener('backend-status-changed', listener);
  },
});
