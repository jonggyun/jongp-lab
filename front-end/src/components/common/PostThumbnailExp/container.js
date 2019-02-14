import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostThumbnailExp from './presenter';

class Container extends Component {
  propType = {};
  componentDidMount() {}
  render() {
    const {
      _id,
      title,
      subtitle,
      writer: { name },
      createdAt,
    } = this.props;
    return (
      <PostThumbnailExp
        id={_id}
        title={title}
        subtitle={subtitle}
        writer={name}
        createdAt={createdAt}
      />
    );
  }
}

export default Container;
