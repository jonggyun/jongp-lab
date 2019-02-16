import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import Ionicons from 'react-ionicons';

const UserHeader = () => (
  <div className={styles.header}>
    <Link to="/">
      <span className={styles.title}>jong-lab</span>
    </Link>
    <div>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Ionicons
        className={styles.icon}
        fontSize="1.25rem"
        icon="ios-search"
        color="white"
      />
    </div>
  </div>
);

export default UserHeader;
