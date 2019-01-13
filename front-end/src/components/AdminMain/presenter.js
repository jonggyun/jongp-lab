import React from 'react';
import styles from './styles.module.scss';
import AdminLeftMenu from 'components/common/AdminLeftMenu';

const AdminMain = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu {...props} />
    <section className={styles.rightContent} />
    MainPage
  </div>
);

export default AdminMain;
