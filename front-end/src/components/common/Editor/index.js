import React, { Component } from 'react';
import styles from './styles.module.scss';
import CodeMirror from 'codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

class Editor extends Component {
  editor = null;
  codeMirror = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽라인에 숫자 띄우기
      lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
    });
  };

  componentDidMount() {
    this.initializeEditor();
  }

  render() {
    return <div className={styles.editor} ref={ref => (this.editor = ref)} />;
  }
}

export default Editor;
