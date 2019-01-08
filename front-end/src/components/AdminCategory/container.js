import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminCategory from './presenter';

class Container extends Component {
  static propType = {
    getCategory: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }
  render() {
    return <AdminCategory {...this.props} />;
  }
}

export default Container;
