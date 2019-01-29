import React, { Component } from 'react';
import MarkdownRender from './presenter';
import PropTypes from 'prop-types';

import marked from 'marked';

class Container extends Component {
  static propType = {
    content: PropTypes.string.isRequired,
  };

  state = {
    html: '',
  };
  componentDidMount() {
    const { content } = this.props;

    if (content) {
      this.setState({
        html: marked(content, {
          breaks: true, // 엔터 줄 입력
          sanitize: true, // 내부 html 무시
        }),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      this._handleMarkdown();
    }
  }

  render() {
    const { html } = this.state;

    const markdown = {
      __html: html,
    };
    return <MarkdownRender markdown={markdown} />;
  }

  _handleMarkdown = () => {
    const { content } = this.props;
    if (!content) {
      this.setState({
        html: '',
      });
      return;
    }

    this.setState({
      html: marked(content, {
        breaks: true, // 엔터 줄 입력
        sanitize: true, // 내부 html 무시
      }),
    });
  };
}

export default Container;
