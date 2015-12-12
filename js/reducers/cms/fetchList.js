/**
 * Created by jovi on 12/12/15.
 */
import * as ACTION_TYPE from '~/actions';

export function fetchList (state = [], action = null) {
  const TYPE = action.type;
  if (TYPE !== ACTION_TYPE.REQUESTING) {
    return state;
  }
  state = [1, 2, 3];
  return state;
}
