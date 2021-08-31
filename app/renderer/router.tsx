import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ROUTER from '@common/constants/router';

import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';

import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from './container/templateList';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();

  useEffect(() => {
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
