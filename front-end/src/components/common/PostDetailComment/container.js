import React, { Component } from 'react';
import PostDetailComment from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  static propType = {
    getAdminComments: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: {
        params: { postId },
      },
      getAdminComments,
    } = this.props;
    getAdminComments(postId);
  }

  render() {
    const { comments } = this.props;
    return <PostDetailComment comments={comments} />;
  }
}

export default Container;
