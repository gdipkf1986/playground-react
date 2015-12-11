import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'

import BaseComponent from '../mixins/BaseComponent';


class App extends BaseComponent {
  constructor(props) {
    super(props);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault()
  }

  handleChange(nextValue) {
    this.props.pushState123(null, `/${nextValue}`)
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#" onClick={this.handleDismissClick}> Dismiss </a>)
      </p>
    )
  }

  render() {

    // click(onchange)
    //  -> dispatch (pushState is a dispatcher and return an action, it passed by connect 1st param)
    //    -> reducers subscribe all actions, will process interested action and return an new state
    //      -> state changed (react will refresh dom)
    //        -> state map to prop (passed by connect 2nd param)

    const { children, inputValue } = this.props;
    return (
      <div>
        <Explore value={inputValue} onChange={this.handleChange} />
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState123: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState123:pushState
})(App)
