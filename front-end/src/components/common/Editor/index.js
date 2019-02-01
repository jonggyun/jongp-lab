// 구조 다시 생각해보기
// if you hava a time, you have to remind again about structure.

import React, { Component } from 'react';
import styles from './styles.module.scss';
import CodeMirror from 'codemirror';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import { actionCreators as editorActions } from 'redux/modules/editor';

class Editor extends Component {
  editor = null;
  codeMirror = null;

  state = {
    content: '',
  };

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽라인에 숫자 띄우기
      lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
    });
    this.codeMirror.on('change', this._handleChangeContent);
  };

  componentDidMount() {
    this.initializeEditor();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.post && this.props.content === '') {
      this.codeMirror.setValue(nextProps.post.content);
    }
    return true;
  }

  render() {
    return <div className={styles.editor} ref={ref => (this.editor = ref)} />;
  }

  _handleChangeContent = doc => {
    const { setContent } = this.props;
    setContent(doc.getValue());
  };
}

Editor.propType = {
  setContent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    editor: { content },
    posts: { post },
  } = state;
  return {
    content,
    post,
  };
};

const mapDispatchToProps = (disaptch, ownProps) => {
  return {
    setContent: content => {
      return disaptch(editorActions.setContent(content));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Editor));
