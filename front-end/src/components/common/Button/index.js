import React from 'react';
import styles from './styles.module.scss';

const Button = props => <button className={styles.button}>{props.name}</button>;

export default Button;
