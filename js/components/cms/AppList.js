/**
 * Created by jovi on 12/12/15.
 */
import React, { Component, PropTypes } from 'react'

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import BaseComponent from '~/mixins/BaseComponent';

class AppList extends BaseComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
        apps
      } = this.props;

    return (
      <ul>
        {apps.map(a=>{
          return <li key={a.url}>{a.title}</li>
        })}
      </ul>
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
