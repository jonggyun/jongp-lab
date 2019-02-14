import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPostDetail from './presenter';

class Container extends Component {
  propType = {
    getPostDetail: PropTypes.func.isRequired,
    post: PropTypes.shape({
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      public: PropTypes.bool.isRequired,
      subtitle: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      writer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
      _id: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    const { getPostDetail } = this.props;
    getPostDetail();
  }

  render() {
    const { post } = this.props;
    console.log('post', post);
    return <UserPostDetail post={post} />;
  }
}

export default Container;
