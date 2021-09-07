import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';
import * as TemplateList from '@src/container/templates';
import Footer from '../Footer';
import EmptyPng from '@assets/icon/empty.png';
import MyScrollBox from '@common/components/MyScrollBox';
import MyEmpty from '@common/components/MyEmpty';

const VALID_TEMPLATE = [0];

function StaticResume() {
  const HEADER_HEIGHT = 76;
  const height = document.body.clientHeight;
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);

  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne />}
            <Footer />
          </>
        )}
        {isValidTemplate && !isIncludeTemplate && <MyEmpty imgSrc={EmptyPng} label="暂未开发此模板！" />}
        {!isValidTemplate && <MyEmpty imgSrc={EmptyPng} label="未查询到模板！" />}
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;
