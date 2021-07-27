import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';

function Personal() {
  const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <MyModal.Dialog title="个人信息">
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <MyInput onChange={(e) => {}} value={base?.username || ''} placeholder="请输入姓名" allowClear={true} />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Personal;
