/**
 * Created by jovi on 12/12/15.
 */
import {CMS_API_SYMBOL} from '~/utils/symbols';

export const APP_FETCHING = 'CMS_APPS_FETCHING';
export const APP_FETCH_SUCCESS = 'CMS_APPS_FETCHED';
export const APP_FETCH_FAILURE = 'CMS_APPS_FAILURE';


export function appsFetch() {
  return {
    [CMS_API_SYMBOL]: {
      endpoint: '/app/list',
      types: [APP_FETCHING, APP_FETCH_SUCCESS, APP_FETCH_FAILURE]
    },
    type: 'appsPreFetch'
  };
}


export const AUTH_CHECKING = 'CMS_AUTH_CHECKING';
export const AUTH_FAILURE = 'CMS_AUTH_FAILURE';
export const AUTH_SUCCESS = 'CMS_AUTH_CHECKING';

export function auth(payload, type = AUTH_CHECKING) {
  return {
    type, payload
  };
}
