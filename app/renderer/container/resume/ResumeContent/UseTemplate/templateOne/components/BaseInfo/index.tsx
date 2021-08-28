import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.less';

function BaseInfo() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：{base.school}</li>
        <li>专业：{base.major}</li>
        <li>学历：{base.degree}</li>
        <li>
          学年：{base.onSchoolTime?.beginTime} - {base.onSchoolTime?.endTime}
        </li>
        <li>籍贯：{base.hometown}</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
