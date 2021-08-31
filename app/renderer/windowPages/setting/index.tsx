import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import './index.less';
import { getAppPath } from '@src/common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';

function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  useEffect(() => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        getAppPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
        });
      }
    });
  }, []);

  const onChangePath = () => {
    ipcRenderer.send('open-save-resume-path', '');
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if (arg.length > 0) {
        setResumeSavePath(arg[0]);
        updateGlobalConfigFile('resumeSavePath', arg[0]);
      } else {
        console.log('自定义存储路径失败');
      }
    });
  };

  return (
    <div styleName="container">
      <p styleName="label">修改简历数据储存路径</p>
      <div styleName="input">
        <div styleName="value">{resumeSavePath || '当前存储路径为：'}</div>
        <div styleName="update-btn" onClick={onChangePath}>
          更改路径
        </div>
      </div>
    </div>
  );
}

export default Setting;
