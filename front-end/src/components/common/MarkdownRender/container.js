import React, { Component } from 'react';
import MarkdownRender from './presenter';
import PropTypes from 'prop-types';

import marked from 'marked';

class Container extends Component {
  static propType = {
    content: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      this._handleMarkdown();
    }
  }

  render() {
    const { content } = this.props;

    const markup = {
      __html: content,
    };

    return <MarkdownRender markup={markup} />;
  }

  _handleMarkdown = () => {
    const { content } = this.props;
    console.log('여기에요', content);
    if (!content) {
      this.setState({
        content: '',
      });
      return;
    }

    this.setState({
      content: marked(content, {
        breaks: true, // 엔터 줄 입력
        sanitize: true, // 내부 html 무시
      }),
    });
  };
}

export default Container;
