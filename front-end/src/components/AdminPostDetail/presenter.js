import React from 'react';
import styles from './styles.module.scss';

import AdminLeftMenu from 'components/common/AdminLeftMenu';
import PostDetail from 'components/common/PostDetail';

const AdminPostDetail = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <section className={styles.rightContent}>
      <PostDetail {...props} />
    </section>
  </div>
);

export default AdminPostDetail;
