import React from 'react';
import styles from './styles.module.scss';
import AdminLeftMenu from 'components/common/AdminLeftMenu';

const AdminMain = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu {...props} />
    <section className={styles.rightContent}>
      <span>Welcome to jongp-lab admin page.</span>
      <span>You can create and modify post.</span>
    </section>
  </div>
);

export default AdminMain;
