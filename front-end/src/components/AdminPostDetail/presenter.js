import React from 'react';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import PostDetail from 'components/common/PostDetail';
import styles from './styles.module.scss';

const AdminPostDetail = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <section className={styles.rightContent}>
      <PostDetail {...props} />
    </section>
  </div>
);

AdminPostDetail.propType = {};

export default AdminPostDetail;
