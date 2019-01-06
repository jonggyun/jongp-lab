import React from 'react';
import styles from './styles.module.scss';
import AdminLeft from 'components/AdminLeft';

const AdminMain = props => (
  <div className={styles.wrap}>
    <AdminLeft {...props} />
    <div className={styles.rightContent} />
    MainPage
  </div>
);

export default AdminMain;
