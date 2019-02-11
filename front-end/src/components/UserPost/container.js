import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPost from './presenter';

class Container extends Component {
  propType = {
    getCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    return <UserPost categories={categories} />;
  }
}

export default Container;
