import React from 'react';
import styles from './styles.module.scss';

const EditorButton = props => (
  <button className={styles.button} onClick={props.handleClick}>
    {props.name}
  </button>
);

export default EditorButton;
