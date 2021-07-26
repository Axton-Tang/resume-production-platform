import React from 'react';
import './index.less';

import ResumeAction from './ResumeAction';
import ResumeToolbar from './ResumeToolbar';
import ResumeContent from './ResumeContent';

function Resume() {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;
