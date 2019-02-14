import React from 'react';
import styles from './styles.module.scss';

import Ionicons from 'react-ionicons';

const UserHeader = () => (
  <div className={styles.header}>
    <span className={styles.title}>jong-lab</span>
    <div>
      <span>Home</span>
      <span>About</span>
      <Ionicons fontSize="1.25rem" icon="ios-search" color="white" />
    </div>
  </div>
);

export default UserHeader;
