import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2019.09 - 2020.05</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>校园自媒体运营</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>负责给校园官方微信公众号撰文，每星期平均贡献3篇图文，平均阅读量3000+</span>
              </li>
              <li styleName="item-content">
                <span>学校官方微信号一年内新增粉丝5000+ ， 增长超过20%；文章平均阅读量提升18% ， 阅读完成率提升7%</span>
              </li>
            </ul>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2018.10 - 2019.5</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>传播数据分析</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>
                  经授权获得本校公众号的运营数据，通过Google
                  Analytics和微信公众号官方工具分析该校园公众号的运营模式和用户画像
                </span>
              </li>
              <li styleName="item-content">
                <span>通过得到的分析报告优化文章的文字、图片等，提升用户阅读完成度约14%</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
