import React from 'react';
import styles from './styles.module.scss';

import Ionicons from 'react-ionicons';

const UserHeader = () => (
  <div className={styles.header}>
    <span>jong-lab</span>
    <div>
      <span>Home</span>
      <span>About</span>
      <Ionicons fontSize="30px" icon="ios-search" color="black" />
    </div>
  </div>
);

export default UserHeader;
