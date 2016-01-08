/**
 * Created by labs-huangf-mac on 15/12/15.
 */

import {AUTH_CHECKING,AUTH_SUCCESS,AUTH_FAILURE} from '~/actions/cms';

export default store => next => action => {
  if (action.type !== AUTH_CHECKING && action.type !== AUTH_FAILURE) {
    return next(action);
  }

  //if (action.type === AUTH_FAILURE) {
  //  return next({type: LOGIN});
  //}

  let state = store.getState();
  if (state.auth && state.auth.token) {
    return next(action);
  } else {
    return Promise.resolve(next({type: AUTH_SUCCESS, payload: {token: Math.random()}}));
  }

};
