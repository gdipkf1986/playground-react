/**
 * Created by jovi on 12/12/15.
 */
import {CMS_API_SYMBOL} from '~/middleware/cmsApi';

export const APP_FETCHING = 'CMS_APPS_FETCHING';
export const APP_FETCH_SUCCESS = 'CMS_APPS_FETCHED';
export const APP_FETCH_FAILURE = 'CMS_APPS_FAILURE';


export function appsFetch () {
  return {
    [CMS_API_SYMBOL]: {
      endpoint: '/app/list',
      types: [APP_FETCHING, APP_FETCH_SUCCESS, APP_FETCH_FAILURE]
    },
    type: 'appsPreFetch'
  }
}
