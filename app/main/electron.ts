import { app, BrowserWindow, ipcMain, dialog, Menu } from 'electron';
import path from 'path';
import customMenu from './customMenu';
import './userData';

export interface MyBrowserWindow extends BrowserWindow {
  uid?: string;
}

function isDev() {
  return process.env.NODE_ENV === 'development';
}
function createWindow() {
  const mainWindow: MyBrowserWindow = new BrowserWindow({
    width: 1150,
    height: 750,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
  mainWindow.uid = 'mainWindow';
  // const settingWindow: MyBrowserWindow = new BrowserWindow({
  //   width: 720,
  //   height: 240,
  //   show: false,
  //   frame: false,
  //   resizable: false,
  //   webPreferences: {
  //     devTools: true,
  //     nodeIntegration: true,
  //   },
  // });
  // settingWindow.uid = 'settingWindow';

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', isDev() ? ROOT_PATH : __dirname);
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
