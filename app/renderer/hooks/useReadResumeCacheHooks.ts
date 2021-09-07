import { useDispatch } from 'react-redux';
import fileAction from '@src/common/utils/file';
import { useReadGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';

export default function () {
  const dispatch = useDispatch();
  return () => {
    const readAppConfigThemeFile = useReadGlobalConfigFile();
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        const path =
          value?.resumeSavePath.search('resumeCache') > -1
            ? value?.resumeSavePath
            : `${value?.resumeSavePath}/resumeCache`;
        fileAction.readDir(path).then((res) => {
          if (res) {
            res.sort((a, b) => {
              const arr1 = a.split('_');
              const arr2 = b.split('_');
              const time1 = arr1[arr1.length - 1].split('.')[0];
              const time2 = arr2[arr2.length - 1].split('.')[0];
              return parseInt(time2, 10) - parseInt(time1, 10);
            });
            const fileName = res[0];
            console.log(fileName);
            fileAction.read(`${path}/${fileName}`, 'utf8').then((res) => {
              const resumeObj = JSON.parse(res);
              const resumeData = [];
              let resumeToolbarKeys = [];
              for (let stateKey of Object.keys(resumeObj)) {
                if (stateKey === 'resumeToolbarKeys') {
                  resumeToolbarKeys = resumeObj[stateKey];
                } else {
                  resumeData.push({
                    key: stateKey,
                    values: resumeObj[stateKey],
                  });
                }
              }
              dispatch({
                type: 'resumeModel/setStoreList',
                payload: resumeData,
              });
              dispatch({
                type: 'templateModel/setStore',
                payload: {
                  key: 'resumeToolbarKeys',
                  values: resumeToolbarKeys,
                },
              });
              dispatch({
                type: 'globalModel/setStore',
                payload: {
                  key: 'readingLocalData',
                  values: true,
                },
              });
            });
          }
        });
      }
    });
  };
}
