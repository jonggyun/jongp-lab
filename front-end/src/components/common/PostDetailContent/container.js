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
    return (
      <PostDetailContent
        post={post}
        handleDelete={this._handleDelete}
        handleModify={this._handleModify}
      />
    );
  }

  _handleDelete = () => {
    const {
      match: {
        params: { postId },
      },
      removePost,
      history,
    } = this.props;
    removePost(postId);

    history.push('/admin/post');
  };

  _handleModify = () => {
    const {
      match: {
        params: { postId },
      },
      history,
    } = this.props;

    history.push(`/admin/editor/${postId}`);
  };
}

export default Container;
