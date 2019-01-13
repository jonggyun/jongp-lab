import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostDetail from './presenter';

class Container extends Component {
  static propType = {
    getPostDetail: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };

  state = {
    content: '',
    comment: '',
  };

  componentDidMount() {
    const { getPostDetail } = this.props;
    getPostDetail();
  }

  render() {
    const { post } = this.props;
    console.log('ss post', post);
    return <PostDetail post={post} />;
  }
}

export default Container;
