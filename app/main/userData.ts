import { app, ipcMain } from 'electron';
import path from 'path';
import fileAction from '@common/utils/file';

const appConfigPath = path.resolve(app.getPath('userData'), 'appConfig');

fileAction
  .canRead(appConfigPath)
  .then(() => {
    fileAction.hasFile(`${appConfigPath}/global.config.json`).catch(() => {
      createGlobalConfigJson();
    });
  })
  .catch(() => {
    fileAction.mkdirDir(appConfigPath).then(() => {
      createGlobalConfigJson();
    });
  });

const createGlobalConfigJson = () => {
  fileAction?.write(`${appConfigPath}/global.config.json`, { name: '全局配置表', resumeSavePath: '' }, 'utf8');
};

ipcMain.on('Electron:get-userData-path', (event, arg) => {
  event.reply('Electron:reply-userData-path', app.getPath('userData'));
});
