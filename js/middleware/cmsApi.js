/**
 * Created by jovi on 12/12/15.
 */
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

import {APP_FETCHING,APP_FETCH_SUCCESS,APP_FETCH_FAILURE} from '~/actions/cms';

export const API_ROOT = 'http://localhost:9981/cms/api/0.1';

export const CMS_API_SYMBOL = Symbol('cmsApiSymbol');


export default store => next => action => {

  const context = action[CMS_API_SYMBOL];
  if (!context) {
    return next(action);
  }

  let {endpoint} = context;
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  const { schema, types } = context;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith (data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CMS_API_SYMBOL];
    return finalAction
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({type: requestType}));


  return fetch(API_ROOT + endpoint).then(
      response =>
      response.json().then(json => ({json, response}))
  ).then(({json, response})=> {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return json;
    }).then(
      response=> next(actionWith({response, type: successType})),
      error=> next(actionWith({error, type: failureType}))
  );

}
