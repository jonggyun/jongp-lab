import React from 'react';
import AdminLeft from 'components/AdminLeft';
import styles from './styles.module.scss';

const AdminAbout = props => (
  <div className={styles.wrap}>
    <AdminLeft />
    <div className={styles.rightContent} />
    AdminAbout!!!!!
  </div>
);

export default AdminAbout;
