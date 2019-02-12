import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostThumbnailExp from './presenter';

class Container extends Component {
  propType = {};
  componentDidMount() {}
  render() {
    console.log('this.props', this.props.writer.name);
    const {
      title,
      subtitle,
      writer: { name },
      createdAt,
    } = this.props;
    return (
      <PostThumbnailExp
        title={title}
        subtitle={subtitle}
        writer={name}
        createdAt={createdAt}
      />
    );
  }
}

export default Container;
