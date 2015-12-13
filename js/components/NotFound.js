/**
 * Created by jovi on 12/13/15.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState, dispatch } from 'redux-router'

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import BaseComponent from '~/mixins/BaseComponent';

class NotFound extends BaseComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      pushState, dispatch, children
      } = this.props;

    return (
      <div>You page is not found, please check url</div>
    )
  }
}

NotFound.propTypes = {
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

NotFound.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};

function mapStateToProps (state) {
  return {...state}
}


export default connect(mapStateToProps, {
  pushState, dispatch
})(CssModule(NotFound, styles));
