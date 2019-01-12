import React from 'react';
import PropTypes from 'prop-types';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import AdminHeader from 'components/common/AdminHeader';
import styles from './styles.module.scss';

const AdminPost = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <div className={styles.rightContent}>
      <AdminHeader type="post" />
    </div>
  </div>
);

export default AdminPost;
