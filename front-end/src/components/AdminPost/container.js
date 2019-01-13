import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminPost from './presenter';

class Container extends Component {
  static propType = {
    posts: PropTypes.arrayOf.isRequired,
    getPosts: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    return <AdminPost posts={this.props.posts} />;
  }
}

export default Container;
