/**
 * Created by labs-huangf-mac on 9/12/15.
 */
import React, {Component} from 'react';
import styles from '../../../../css/app.scss';
import CSSModules from 'react-css-modules';

export default CSSModules(React.createClass({
  // getinitialstate() {
  //   return {};
  // },

  getDefaultProps(){
    return {name: Math.random(), gid: Math.random(), active: Math.random() > 0.5}
  },
  click(){
    alert(1)
  },
  render() {
    return (
      <div styleName="item">
        <span styleName="id">{this.props.id}</span>
        <span styleName="name">{this.props.name}</span>
        <span styleName="">{this.props.gid}</span>
        <span>{this.props.operation}</span>
        <span><input type="checkbox" disabled checked={this.props.active}/></span>
        <span><button onClick={this.click}>{this.props.name}</button></span>
      </div>
    );
  }
}), styles);
