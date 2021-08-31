import React, { useState } from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ROUTER from '@src/common/constants/router';
import toPrintPdf from '@common/utils/htmlToPdf';

import MyButton from '@common/components/MyButton';
import MyModal from '@src/common/components/MyModal';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const history = useHistory();

  const [componentVisible, setComponentVisible] = useState(false);

  const onBack = () => history.push(ROUTER.root);
  const onExport = () => {
    toPrintPdf(`${base.username}的简历`);
    setComponentVisible(false);
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton size="middle" className="export-btn" onClick={() => setComponentVisible(true)}>
        导出PDF
      </MyButton>
      {componentVisible && (
        <MyModal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确哦！"
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
