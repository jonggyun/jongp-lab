import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostThumbnailExp from './presenter';

class Container extends Component {
  propType = {
    getPosts: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { posts } = this.props;
    return <PostThumbnailExp />;
  }
}

export default Container;
