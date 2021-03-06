import React, { useState } from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import ROUTER, { ROUTER_KEY } from '@src/common/constants/router';
import toPrintPdf from '@common/utils/htmlToPdf';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';

import MyButton from '@common/components/MyButton';
import MyModal from '@src/common/components/MyModal';
import { getUserStoreDataPath } from '@src/common/utils/appPath';
import fileAction from '@src/common/utils/file';
import { intToDateString } from '@src/common/utils/time';
import { compilePath } from '@src/common/utils/router';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const resume = useSelector((state: any) => state.resumeModel);
  const resumeToolbarKeys = useSelector((state: any) => state.templateModel.resumeToolbarKeys);
  const history = useHistory();
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  const [componentVisible, setComponentVisible] = useState(false);

  const routerParams =
    useParams<{
      fromPath: string;
      templateId: string;
      templateIndex: string;
    }>();

  const onBack = () => {
    if (routerParams?.fromPath === ROUTER_KEY.root) {
      history.push(compilePath(ROUTER.root));
    } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
      history.push(compilePath(ROUTER.templateList));
    }
  };
  const onExport = () => {
    toPrintPdf(`${base.username}įįŽå`);
    setComponentVisible(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        getUserStoreDataPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
          saveResumeJson(`${appPath}resumeCache`);
        });
      }
    });
  };

  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${Date.now()}.json`;
    const jsonData = {
      ...resume,
      resumeToolbarKeys,
    };
    // åĻæčˇ¯åžä¸­ä¸å­å¨ resumeCache æäģļå¤šīŧåéģčŽ¤ååģēæ­¤æäģļå¤š
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      if (fileAction.isExitsFoler(resumeSavePath)) {
        console.log('æčĸĢæ§čĄäē');
        fileAction?.write(`${resumeSavePath}/${prefix}`, jsonData, 'utf8');
      } else {
        fileAction
          ?.mkdirDir(resumeSavePath)
          .then((path: any) => {
            if (path) fileAction?.write(`${path}/${prefix}`, jsonData, 'utf8');
          })
          .catch(() => {
            console.log('ååģēæäģļå¤šå¤ąč´Ĩ');
          });
      }
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/resumeCache`)
        .then(() => {
          if (fileAction.isExitsFoler(`${resumeSavePath}/resumeCache`)) {
            fileAction?.write(`${resumeSavePath}/resumeCache/${prefix}`, jsonData, 'utf8');
          }
        })
        .catch(() => {
          console.log('ååģēæäģļå¤šå¤ąč´Ĩ');
        });
    }
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        čŋå
      </div>
      <MyButton size="middle" className="export-btn" onClick={() => setComponentVisible(true)}>
        å¯ŧåēPDF
      </MyButton>
      {componentVisible && (
        <MyModal.Confirm
          title="įĄŽåŽčĻæå°įŽååīŧ"
          description="č¯ˇįĄŽäŋäŋĄæ¯įæ­ŖįĄŽåĻīŧ"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setComponentVisible(false),
            },
            submitBtn: {
              isShow: true,
              callback: onExport,
            },
          }}
        />
      )}
    </div>
  );
}
export default ResumeAction;
