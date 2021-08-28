import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '../../useUpdateResumeHook';
interface IProps {
  onClose: () => void;
}

function Personal({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <MyModal.Dialog
      title="个人信息"
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/username', e.target?.value || '');
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>院 校 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/school', e.target?.value || '');
              }}
              value={base?.school || ''}
              placeholder="请输入院校"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>专 业 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/major', e.target?.value || '');
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 历 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/degree', e.target?.value || '');
              }}
              value={base?.degree || ''}
              placeholder="请输入学历"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 年 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                const curSchoolTime = {
                  beginTime: e.target?.value,
                  endTime: base.onSchoolTime?.endTime,
                };
                updateResumeHook('base/onSchoolTime', curSchoolTime);
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="请输入开始时间"
              allowClear={true}
              style={{ width: '300px' }}
            />
            <span styleName="line">-</span>
            <MyInput
              onChange={(e) => {
                const curSchoolTime = {
                  beginTime: base.onSchoolTime?.beginTime,
                  endTime: e.target?.value,
                };
                updateResumeHook('base/onSchoolTime', curSchoolTime);
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="请输入结束时间"
              allowClear={true}
              style={{ width: '300px' }}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/hometown', e.target?.value || '');
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Personal;
