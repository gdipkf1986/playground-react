/**
 * Created by jovi on 12/12/15.
 */
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

export const CMS_API_SYMBOL = Symbol('cmsApiSymbol');


export default store => next => action => {

  console.log('------------> middle ware called');
  if (action.type === 'CMS_API_FETCHING') {
    return next(Object.assign({}, action, {type: 'CMS_API_FETCHED'}))
  }

  return next(action);
}
