import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：××××大学</li>
        <li>专业：传播学</li>
        <li>学历：本科</li>
        <li>学年：2018.09 - 2022.06</li>
        <li>籍贯：湖南</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
