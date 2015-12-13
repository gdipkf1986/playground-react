import React, { Component, PropTypes } from 'react'

import BaseComponent from '~/mixins/BaseComponent';
import GmcNav from '~/components/GmcNav';

class System extends BaseComponent {
  constructor (props) {
    super(props);
  }

  render () {

    // click(onchange)
    //  -> dispatch (pushState is a dispatcher and return an action, it passed by connect 1st param)
    //    -> reducers subscribe all actions, will process interested action and return an new state
    //      -> state changed (react will refresh dom)
    //        -> state map to prop (passed by connect 2nd param)

    let links = [
      {text: 'Git Hub', url: '/github/'},
      {text: 'CMS', url: '/cms'}
    ];
    return (
      <div>
        <GmcNav links={links}></GmcNav>

        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

System.propTypes = {
  children: PropTypes.node
};


export default System;
