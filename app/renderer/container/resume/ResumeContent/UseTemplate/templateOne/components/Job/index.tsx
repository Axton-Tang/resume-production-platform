import React from 'react';
import '../../../styles/template-one.less';
import './index.less';

function Job() {
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        <li>职位：内容运营</li>
        <li>城市：杭州 | 上海 | 广州</li>
      </ul>
    </div>
  );
}

export default Job;
