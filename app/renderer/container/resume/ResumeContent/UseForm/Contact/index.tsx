import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '../../useUpdateResumeHook';
interface IProps {
  onClose: () => void;
}

function Contact({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  return (
    <MyModal.Dialog
      title="联系方式"
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
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('contact/phone', e.target?.value || '');
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('contact/email', e.target?.value || '');
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Contact;
