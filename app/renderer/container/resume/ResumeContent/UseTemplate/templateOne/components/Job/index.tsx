import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.less';
import './index.less';

function Job() {
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        <li>职位：{work.job}</li>
        <li>城市：{work.city}</li>
      </ul>
    </div>
  );
}

export default Job;
