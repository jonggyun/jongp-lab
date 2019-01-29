import React, { Component } from 'react';
import PostDetailContent from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  static propType = {
    post: PropTypes.object.isRequired,
    removePost: PropTypes.func.isRequired,
  };
  render() {
    const { post } = this.props;
    return <PostDetailContent post={post} handleDelete={this._handleDelete} />;
  }

  _handleDelete = () => {
    const {
      match: {
        params: { postId },
      },
      removePost,
      history,
    } = this.props;
    console.log('match', postId);
    removePost(postId);

    history.push('/admin/post');
  };
}

export default Container;
