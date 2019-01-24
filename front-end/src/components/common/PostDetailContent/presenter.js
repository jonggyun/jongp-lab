import React from 'react';
import styles from './styles.module.scss';
import Tag from 'components/common/Tag';
import dateFormat from 'dateformat';
import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';
import PropType from 'prop-types';

const PostDetailContent = ({ post }) => (
  <div>
    <div className={styles.info}>
      <img
        className={styles.profileImage}
        src={post.imagePath || defaultProfile}
        alt="profile"
      />
      <div className={styles.createdAt}>
        {dateFormat(post.createdAt, 'isoDate')}
      </div>
    </div>
    <div className={styles.titles}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.subtitle}>{post.subtitle}</div>
    </div>
    <div className={styles.buttons}>
      <div className={styles.button}>삭제</div>
      <div className={styles.button}>수정</div>
    </div>
    <img
      className={styles.thumbnail}
      src={post.thumbnail || defaultThunmbnail}
      alt="thumbnail"
    />
    <div className={styles.content}>{post.content}</div>
    <div className={styles.tags}>
      <Tags tags={post.tags} />
    </div>
  </div>
);

PostDetailContent.propType = {
  imagePath: PropType.string,
  createdAt: PropType.string.isRequired,
  title: PropType.string.isRequired,
  subtitle: PropType.string,
  thumbnail: PropType.string,
  content: PropType.string,
};

const Tags = ({ tags }) => {
  let index = 0;
  return tags.map(tag => <Tag key={index++} tag={tag} />);
};

export default PostDetailContent;
