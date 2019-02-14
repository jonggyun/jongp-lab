import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import PostDetailContent from 'components/common/PostDetailContent';
import UserHeader from 'components/common/UserHeader';

const UserPostDetail = ({ post }) => (
  <section className={styles.wrapper}>
    <UserHeader />
    <div className={styles.postDetail}>
      {post && <PostDetailContent post={post} />}
    </div>
  </section>
);

export default UserPostDetail;
