/**
 * Created by jovi on 12/12/15.
 */
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import BaseComponent from '~/mixins/BaseComponent';

class Nav extends BaseComponent {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <ul>
        {this.props.links.map(l=> {
          return <li key={l.url}><Link to={l.url}>{l.text}</Link></li>;
        })}
      </ul>
    )
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

Nav.defaultProps = {
  links: [{text: 'home', url: '/'}]
  // isFetching: true,
  // loadingLabel: 'Loading...'
};


export default Nav;
