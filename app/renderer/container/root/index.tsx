import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { compilePath } from '@src/common/utils/router';

function Root() {
  const history = useHistory();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (!isHttpOrHttpsUrl(router.url)) {
      history.push(
        compilePath(router.url, {
          fromPath: ROUTER_KEY.root,
          templateId: selectTemplate?.templateId,
          templateIndex: selectTemplate?.templateIndex,
        })
      );
    } else {
      shell.openExternal(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} />
        <div styleName="title">智能简历制作平台</div>
        <div styleName="tips">一个智能化的简历制作平台，让你的简历制作更容易更出众！</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">Copyright © 2021 All Rights Reserved. Copyright By Axton Tang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
