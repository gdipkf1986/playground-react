/**
 * Created by jovi on 12/12/15.
 */
import merge from 'lodash/object/merge'

import * as ACTION_TYPE from '~/actions';

export function apps (state = [], action = null) {
  if (action.response && action.response.data) {
    return merge([], state, action.response.data);
  }

  return state;
}
