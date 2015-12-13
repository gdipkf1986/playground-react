import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState, dispatch } from 'redux-router'

import BaseComponent from '~/mixins/BaseComponent';
import AppList from '~/components/cms/AppList';

import {appsFetch} from '~/actions/cms';

class AppListContainer extends BaseComponent {
  constructor (props) {
    super(props);
    this.state = {apps: []};
  }

  componentDidMount () {

    // actionType
    //  -> actionCreator
    //    -> dispatchAction
    //      -> api middleware fetch interested action
    //        -> api middleware dispatch fetching action
    //          -> api middleware fetch and call next (with fetch success action) on success handler
    //    -> middleware proceed
    //    -> middleware return proceed state
    //    -> components refresh dom by state

    const {dispatch} = this.props;
    dispatch(appsFetch());
  }

  render () {


    //const apps = this.getApps();
    const { children, dispatch } = this.props;

    return (
      <div>
        <AppList apps={this.props.apps ||[]}></AppList>
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
