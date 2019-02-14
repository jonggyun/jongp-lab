import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

import UserHeader from 'components/common/UserHeader';
import PostThumbnailExp from 'components/common/PostThumbnailExp';

import Ionicons from 'react-ionicons';

const UserPost = ({ categories, posts }) => (
  <section className={styles.wrapper}>
    <UserHeader />
    <div className={styles.content}>
      <div className={styles.left}>
        <nav className={styles.categories}>
          <ul>
            <li>All</li>
            {categories && <Categoires categories={categories} />}
          </ul>
        </nav>
      </div>
      <div className={styles.posts}>{posts && <Posts posts={posts} />}</div>
    </div>
  </section>
);

UserPost.propType = {
  categoires: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

const Categoires = ({ categories }) =>
  categories.map(category => <li key={category.id}>{category.name}</li>);

const Posts = ({ posts }) =>
  posts.map(post => <PostThumbnailExp key={post._id} {...post} />);

export default UserPost;
