import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import System from '~/containers/System';

import GitHub from '~/containers/github/GitHub';
import UserPage from '~/containers/github/UserPage';
import RepoPage from '~/containers/github/RepoPage';

import Cms from '~/containers/cms/Cms';
import AppListContainer from '~/containers/cms/AppListContainer';
import AppDetailContainer from '~/containers/cms/AppDetailContainer';

import NotFound from '~/components/NotFound';

export default (
  <Route path='/' component={System}>

    <Redirect from='/cms' to='/cms/apps'/>

    <Route path='github' component={GitHub}>
      <Route path=':login/:name' component={RepoPage}/>
      <Route path=':login' component={UserPage}/>
    </Route>

    <Route path='cms' component={Cms}>
      <Route path='apps' component={AppListContainer}></Route>
      <Route path='app'>
        <IndexRoute component={NotFound}></IndexRoute>
        <Route path=':id' component={AppDetailContainer}></Route>
      </Route>
    </Route>

    <Route path='notfound' component={NotFound}/>

    <Redirect from='*' to='/notfound'></Redirect>

  </Route>

);
