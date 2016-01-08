/**
 * Created by labs-huangf-mac on 11/12/15.
 */
import React, { Component } from 'react';
import { is } from 'immutable';

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this._autoBinding.bind(this)();
  }

  _autoBinding(skipMethods = []) {
    for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
      let method = this[name];
      skipMethods = ['render', 'constructor'].concat(skipMethods);
      if (!(method instanceof Function) || method === this || skipMethods.indexOf(name) > -1) {
        continue;
      }
      this[name] = method.bind(this);
    }
  }

  //shouldComponentUpdate() {
  //  return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  //}

  //shouldComponentUpdate(nextProps, nextState) {
  //  return !(this.props === nextProps || is(this.props, nextProps)) || !(this.state === nextState || is(this.state, nextState));
  //}
}
