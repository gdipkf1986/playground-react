import * as ActionTypes from '../actions'
import merge from 'lodash/object/merge'
import paginate from './github/paginate'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'


import * as cmsApi  from './cms/fetchList.js';
import * as gitHubApi from './github/';

const rootReducer = combineReducers({ ...gitHubApi, router,...cmsApi});

export default rootReducer
