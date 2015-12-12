/**
 * Created by jovi on 12/12/15.
 */
import React, { Component, PropTypes } from 'react'

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import BaseComponent from '~/mixins/BaseComponent';

class Cms extends BaseComponent {

  render () {
    const {
      pro1
      } = this.props;

    return (
      <div> cms init
      </div>
    )
  }
}

Cms.propTypes = {
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
}

Cms.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
}


export default CssModule(Cms, styles);
