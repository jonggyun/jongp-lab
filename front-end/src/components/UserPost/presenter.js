import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

import UserHeader from 'components/common/UserHeader';
import PostThumbnailExp from 'components/common/PostThumbnailExp';

const UserPost = ({ categories }) => (
  <section className={styles.wrapper}>
    <UserHeader />
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.title}>Category</div>
        <nav className={styles.categories}>
          <ul>
            <li>전체보기</li>
            {categories && <Categoires categories={categories} />}
          </ul>
        </nav>
      </div>
      <div className={styles.posts}>
        <PostThumbnailExp />
      </div>
    </div>
  </section>
);

UserPost.propType = {
  categoires: PropTypes.array.isRequired,
};

const Categoires = ({ categories }) =>
  categories.map(category => <li key={category.id}>{category.name}</li>);

export default UserPost;
