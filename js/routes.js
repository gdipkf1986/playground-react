import React from 'react'
import { Route } from 'react-router'

import System from '~/containers/System';

import Github from '~/containers/github/Github';
import UserPage from '~/containers/github/UserPage';
import RepoPage from '~/containers/github/RepoPage';

import Cms from '~/containers/cms/Cms';


export default (
  <Route path="/" component={System}>
    <Route path="github" component={Github}>
      <Route path=":login/:name" component={RepoPage}/>
      <Route path=":login" component={UserPage}/>
    </Route>
    <Route path="/cms" component={Cms}>

    </Route>
  </Route>
)
