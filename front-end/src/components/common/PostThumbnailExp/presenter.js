import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';

const PostThumbnailExp = ({ thumbnail, writer }) => {
  return (
    <div className={styles.postFrame}>
      <img
        className={styles.thumbnail}
        alt="thumbnail"
        src={defaultThunmbnail}
      />
      <div className={styles.title}>여기가 제목</div>
      <div className={styles.subTitle}>여기가 요약</div>
      <div className={styles.info}>
        <span className={styles.userName}>유저이름</span>
        <span className={styles.createdAt}>2019-01-01</span>
      </div>
      <img className={styles.profileImage} alt="profile" src={defaultProfile} />
    </div>
  );
};

PostThumbnailExp.propType = {
  posts: PropTypes.array.isRequired,
};

export default PostThumbnailExp;
