const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1150,
    height: 750,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
  const settingWindow = new BrowserWindow({
    width: 720,
    height: 240,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

ipcMain.on('open-save-resume-path', (event, arg) => {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      event.reply('reply-save-resume-path', result.filePaths);
    })
    .catch((err) => {
      event.reply('reply-save-resume-path', err);
    });
});
