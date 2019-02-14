import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';

const PostThumbnailExp = ({
  id,
  thumbnail,
  title,
  subtitle,
  writer,
  createdAt,
}) => {
  const postLink = `/post/${id}`;
  return (
    <section className={styles.postFrame}>
      <Link to={postLink}>
        <img
          className={styles.thumbnail}
          alt="thumbnail"
          src={defaultThunmbnail}
        />
      </Link>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subtitle}</div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <span className={styles.userName}>{writer}</span>
          <span className={styles.createdAt}>
            {dateFormat(createdAt, 'isoDate')}
          </span>
        </div>
        <img
          className={styles.profileImage}
          alt="profile"
          src={defaultProfile}
        />
      </div>
    </section>
  );
};

PostThumbnailExp.propType = {
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default PostThumbnailExp;
