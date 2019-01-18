import React from 'react';
import styles from './styles.module.scss';

const Tag = props => (
  <div key={props.index} className={styles.tag}>
    {props.tag}
  </div>
);

export default Tag;
