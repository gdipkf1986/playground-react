/**
 * Created by jovi on 12/12/15.
 */
import React, { Component, PropTypes } from 'react'

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import BaseComponent from '~/mixins/BaseComponent';

import {Grid,Row,Col} from 'react-bootstrap';

class AppList extends BaseComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      app
      } = this.props;

    return (
      <div className='container'>hello world</div>
    )
  }
}

AppList.propTypes = {
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

AppList.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};


export default CssModule(AppList, styles);
