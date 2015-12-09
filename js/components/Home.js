import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import '../../css/normalize.css';
import '../../css/constant.scss';


import Cms from './cms/Cms';


const Index = React.createClass({
  render() {
    return (
      <Cms />
    );
  }
});

export default connect(state => state.Sample)(Index)
