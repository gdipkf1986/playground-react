import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState, dispatch } from 'redux-router'

import BaseComponent from '~/mixins/BaseComponent';
import AppList from '~/components/cms/AppList';

class AppListContainer extends BaseComponent {
  constructor (props) {
    super(props);
    this.state = {};
  }

  getApps () {
    const {dispatch} = this.props;
    dispatch({type: 'CMS_API_FETCHING'});
  }

  componentDidMount () {
    const {dispatch} = this.props;
    dispatch({type: 'CMS_API_FETCHING'});
  }

  render () {


    //const apps = this.getApps();
    const { children, dispatch } = this.props;

    return (
      <div>
        <input onClick={this.getApps} value="load" type="button"/>
        <AppList apps={this.props.cmsApps ||[]}></AppList>

        {/* children injected by router*/}
        {children}
      </div>
    )
  }
}

AppListContainer.propTypes = {
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

AppListContainer.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};

function mapStateToProps (state) {
  return {...state}
}

export default connect(mapStateToProps)(AppListContainer);
