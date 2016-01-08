/**
 * Created by labs-huangf-mac on 15/12/15.
 */
import {AUTH_SUCCESS} from '~/actions/cms';

export function auth(state = {}, action = null) {

  if (action.type === AUTH_SUCCESS) {
    return action.payload;
  }

  return state;
}
