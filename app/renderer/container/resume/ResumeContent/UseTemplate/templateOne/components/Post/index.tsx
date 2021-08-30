import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Post() {
  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: any) => state.resumeModel.schoolExperience);
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        {schoolExperience.map((item, index) => {
          return (
            <li styleName="flex" key={index}>
              <div styleName="left">
                <p>
                  {item.beginTime}-{item.endTime}
                </p>
                <p>{item.post}</p>
              </div>
              <div styleName="right">
                <p>{item.department}</p>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Post;
