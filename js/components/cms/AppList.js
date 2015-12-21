/**
 * Created by jovi on 12/12/15.
 */
import React, { Component, PropTypes } from 'react';

import styles from '~/../css/app.scss';
import CssModule from 'react-css-modules';

import {Link} from 'react-router';

import BaseComponent from '~/mixins/BaseComponent';
import sortObjectArray from '~/utils/sortObjectArray';

class AppList extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {apps} = this.props;
    apps.sort(sortObjectArray({name: 'id', reverse: true}));

    return (
      <table className='table table-hover'>
        <thead>
        <tr>
          <th>Id</th>
          <th>App Name</th>
          <th>Garena Id</th>
          <th>Game Operation</th>
          <th>Active</th>
          <th>Operation</th>
        </tr>
        </thead>
        <tbody>
        {apps.map(a=> {
          return (
            <tr key={a.id}>
              <td><Link to={'/cms/app/' + a.id}>{a.id}</Link></td>
              <td><Link to={'/cms/app/' + a.id}>{a.app_name}</Link></td>
              <td>{a.garena_id}</td>
              <td>{
                a.users && a.users.map(u=> {
                  return (u.name);
                })
              }</td>
              <td><input type='checkbox' checked={a.is_active} readOnly /></td>
              <td>
                <button className='btn btn-primary'>Operation</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

AppList.propTypes = {

  // LoadingLabel: PropTypes.string.isRequired,
  // pageCount: PropTypes.number,
  // renderItem: PropTypes.func.isRequired,
  // items: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // onLoadMoreClick: PropTypes.func.isRequired,
  // nextPageUrl: PropTypes.string
};

AppList.defaultProps = {

  // IsFetching: true,
  // loadingLabel: 'Loading...'
};

export default CssModule(AppList, styles);
