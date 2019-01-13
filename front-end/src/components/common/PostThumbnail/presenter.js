import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';

const PostThumbnail = ({
  id,
  title,
  subtitle,
  thumbnail,
  thumbnailPath,
  writer,
  createdAt,
}) => {
  const postLink = `/admin/post/${id}`;
  return (
    <div className={styles.postFrame}>
      <div className={styles.thumbnailWrap}>
        <Link to={postLink}>
          <img
            className={styles.thumbnail}
            alt="thumbnail"
            src={thumbnail ? thumbnailPath : defaultThunmbnail}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.info}>
          <div className={styles.profileImageWrap}>
            <img
              className={styles.profileImage}
              alt="profile"
              src={writer.imagePath ? writer.imagePath : defaultProfile}
            />
          </div>
          <div className={styles.infoText}>
            <div className={styles.username}>{writer.name}</div>
            <div className={styles.createdAt}>
              {dateFormat(createdAt, 'isoDate')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostThumbnail.propType = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  thumbnail: PropTypes.string,
  thumbnailPath: PropTypes.string,
  writer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default PostThumbnail;
