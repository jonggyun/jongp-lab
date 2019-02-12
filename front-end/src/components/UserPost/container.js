import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPost from './presenter';

class Container extends Component {
  propType = {
    getCategories: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getCategories, getPosts } = this.props;
    getCategories();
    getPosts();
  }

  render() {
    const { categories, posts } = this.props;
    return <UserPost categories={categories} posts={posts} />;
  }
}

export default Container;
