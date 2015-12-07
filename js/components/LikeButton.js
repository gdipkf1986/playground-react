/**
 * Created by labs-huangf-mac on 7/12/15.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';


export default React.createClass({
  getInitialState: function() {
    console.info('getInitialState by class ');
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

