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

export function cmsApps (state = [], action = null) {
  if (action.type === 'CMS_API_FETCHED') {
    console.log('----------> reducer notified');
    return [1, 2, 3].map(i=> {
      return {title: Math.random(), url: Math.random()}
    })
  }else{
    console.log('----> ignored '+action.type);
  }
  return state;
}
