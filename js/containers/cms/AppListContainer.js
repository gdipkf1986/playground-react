import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

import BaseComponent from '~/mixins/BaseComponent';
import AppList from '~/components/cms/AppList';

class AppListContainer extends BaseComponent {
  constructor (props) {
    super(props);
  }

  getApps () {
    return [1, 2, 3, 4].map(i=> {
      return {title: Math.random(), url: Math.random()}
    })
  }

  render () {

    const apps = this.getApps();
    const { children } = this.props;

    return (
      <div>
        <AppList apps={apps}></AppList>

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
  return {}
}

export default connect(mapStateToProps, {
  pushState
})(AppListContainer);
