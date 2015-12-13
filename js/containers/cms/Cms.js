import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import {Link} from 'react-router';

import BaseComponent from '~/mixins/BaseComponent';

class Cms extends BaseComponent {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.pushState(null, '/cms/apps');
  }

  render () {
    const {
      children
      } = this.props;

    return (
      <div>
        {children}
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
  children: PropTypes.node
};

Cms.defaultProps = {
  // isFetching: true,
  // loadingLabel: 'Loading...'
};

function mapStateToProps (state) {
  return {...state}
}

export default connect(mapStateToProps, {
  pushState
})(Cms);
