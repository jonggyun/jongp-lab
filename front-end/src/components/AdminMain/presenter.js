import React from 'react';
import styles from './styles.module.scss';
import LeftMenu from 'components/common/admin/LeftMenu';

const AdminMain = props => (
  <div className={styles.wrap}>
    <LeftMenu {...props} />
    <div className={styles.rightContent} />
    MainPage
  </div>
);

export default AdminMain;
