import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '../../useUpdateResumeHook';
interface IProps {
  onClose: () => void;
}

function Work({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  return (
    <MyModal.Dialog
      title="求职意向"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('work/job', e.target?.value || '');
              }}
              value={work?.job || ''}
              placeholder="请输入职位"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('work/city', e.target?.value || '');
              }}
              value={work?.city || ''}
              placeholder="请输入城市"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Work;
