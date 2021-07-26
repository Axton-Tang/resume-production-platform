import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">智能简历</p>
      <p styleName="job">内容运营</p>
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
