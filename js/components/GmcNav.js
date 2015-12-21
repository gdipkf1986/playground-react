/**
 * Created by jovi on 12/13/15.
 */
import React, { Component, PropTypes } from 'react';


import BaseComponent from '~/mixins/BaseComponent';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class GmcNav extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goLink(link) {
    const {pushState} = this.props;
    this.setState({currentModule: link.text});
    pushState(null, link.url);
  }

  render() {
    const {links, router} = this.props;
    const path = (router.routes.length >= 2 && router.routes[1].path) ?
      router.routes[1].path.toUpperCase()
      : 'GMC';
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Garena Mobile Center</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title={this.state.currentModule || path} id='nav_drop_down'>
            {links.map((l, i)=> {
              return <MenuItem key={l.url} href='#' onClick={this.goLink.bind(this,l)} eventKey={`3.${i}`}>{l.text}</MenuItem>;
            })}
            {}/*<MenuItem divider/>*/}/*<MenuItem divider/>*/}
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

GmcNav.propTypes = {
  children: PropTypes.node
  // loadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

GmcNav.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};

import { connect } from 'react-redux';
import { pushState, dispatch } from 'redux-router';

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, {pushState, dispatch})(GmcNav);
