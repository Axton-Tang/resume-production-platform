import React, { useEffect } from 'react';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { HashRouter, Redirect } from 'react-router-dom';
import ROUTER from '@common/constants/router';

import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useReadResumeCacheHooks from './hooks/useReadResumeCacheHooks';

import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from './container/templateList';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const readResumeCacheHooks = useReadResumeCacheHooks();

  useEffect(() => {
    readDirAssetsTemplateHooks();
    readResumeCacheHooks();
  }, []);

  return (
    <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ROUTER.root} exact>
          <Root />
        </CacheRoute>
        <CacheRoute path={ROUTER.resume} exact>
          <Resume />
        </CacheRoute>
        <CacheRoute path={ROUTER.templateList} exact>
          <TemplateList />
        </CacheRoute>
      </CacheSwitch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
