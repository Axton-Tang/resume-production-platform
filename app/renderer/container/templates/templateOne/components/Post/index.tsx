import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-2020.09</p>
            <p>文艺部会长</p>
          </div>
          <div styleName="right">
            <p>校团委学生会</p>
            <p>
              计划、组织、协调各年级学生组织的文艺和文化娱乐活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
