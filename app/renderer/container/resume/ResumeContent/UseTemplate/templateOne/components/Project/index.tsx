import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Project() {
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeModel.projectExperience
  );
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        {projectExperience.map((item, index) => {
          return (
            <li styleName="flex" key={index}>
              <div styleName="left">
                <p>
                  <span>
                    {item.beginTime} - {item.endTime}
                  </span>
                </p>
              </div>
              <div styleName="right">
                <p>
                  <span>{item.projectName}</span>
                  <span>{item.post}</span>
                </p>
              </div>
              <div styleName="text">
                <ul styleName="item-box">
                  <li styleName="item-content">
                    <span>{item.content}</span>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Project;
