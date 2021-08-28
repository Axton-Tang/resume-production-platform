import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Synopsis() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  return (
    <div styleName="content">
      <p styleName="name">{base.username}</p>
      <p styleName="job">{work.job}</p>
      <p styleName="summary">
        {[
          '作为负责人，协同体育社同事主办校级公益筹款项目，联系各院系社联参与活动，同时联系多家校园自媒体推广该活动',
          '在校园内组织地推和宣传，最终参与人数300+，盈利5k+，全部捐献给公益组织',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
