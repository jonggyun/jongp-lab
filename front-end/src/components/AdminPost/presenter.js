import React from 'react';
import PropTypes from 'prop-types';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import AdminHeader from 'components/common/AdminHeader';
import PostThumbnail from 'components/common/PostThumbnail';
import styles from './styles.module.scss';

const AdminPost = ({ posts }) => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <section className={styles.rightContent}>
      <AdminHeader type="post" />
      <div className={styles.postList}>{posts && <Posts posts={posts} />}</div>
    </section>
  </div>
);

AdminPost.propType = {
  posts: PropTypes.arrayOf,
  getPosts: PropTypes.func.isRequired,
};

const Posts = ({ posts }) =>
  posts.map(post => {
    return (
      <PostThumbnail
        key={post._id}
        id={post._id}
        title={post.title}
        subtitle={post.subtitle}
        thumnbnail={post.thumnbnail}
        thumnbnailPath={post.thumnbnailPath}
        writer={post.writer}
        createdAt={post.createdAt}
      />
    );
  });

export default AdminPost;
