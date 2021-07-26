import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        <li styleName="item">Office</li>
        <li styleName="item">内容运营</li>
        <li styleName="item">数据分析</li>
        <li styleName="item">文案写作</li>
      </ul>
    </div>
  );
}

export default Skill;
