import React from 'react';
import './index.less';
import * as TemplateList from '@src/container/templates';
import Footer from '../Footer';
import MyScrollBox from '@common/components/MyScrollBox';

function StaticResume() {
  const HEADER_HEIGHT = 76;
  const height = document.body.clientHeight;

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        <div styleName="template">
          <TemplateList.TemplateOne />
        </div>
        <Footer />
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;
