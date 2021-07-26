import './index.less';
import React from 'react';

function Work() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2021.06-至今</p>
            <p>内容运营实习生</p>
          </div>
          <div styleName="right">
            <p>×××× 公司</p>
            <p>
              负责在线教育类app专栏的内容撰写、审稿和更新。平均每周撰写3篇专栏文章，平均阅读量2w+
              统计用户专栏阅读数据并归纳用户感兴趣的话题，同时根据话题调整写作方向，阅读量成功提升20%
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
