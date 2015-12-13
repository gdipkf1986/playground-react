import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState, dispatch } from 'redux-router'

import BaseComponent from '~/mixins/BaseComponent';
import AppDetail from '~/components/cms/AppDetail';

class AppDetailContainer extends BaseComponent {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // init async data at here, fetch data directly or dipatch an action
    // const { dispatch } = this.props
  }

  render () {
    const {
      children, dispatch
      } = this.props;

    return (
      <div>

        this is app detail container
        {/* children injected by router*/}
        {children}
      </div>
    )
  }
}

AppDetailContainer.propTypes = {
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
  children: PropTypes.node
};

AppDetailContainer.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};

function mapStateToProps (state) {
  return {...state}
}

export default connect(mapStateToProps, {
  pushState, dispatch
})(AppDetailContainer);
