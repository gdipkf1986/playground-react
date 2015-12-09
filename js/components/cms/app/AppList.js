import React, {Component} from 'react';
import AppListItem from './AppListItem';

import styles from '../../../../css/app.scss';
import CSSModules from 'react-css-modules';

export default CSSModules(React.createClass({
  getApps(){
    return new Array(10 + parseInt(Math.random() * 30)).fill(1).map((v, i)=> {
      return {name: Math.random(), gid: Math.random(), active: Math.random() > 0.5, key: i, id: i}
    })
  },
  render() {
    const apps = this.getApps();
    return (
      <div styleName="app-list">
        {apps.map((app=> {
          return <AppListItem {...app}/>
        }))}
      </div>
    );
  }
}), styles);
