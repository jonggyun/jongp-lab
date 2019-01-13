import React from 'react';
import styles from './styles.module.scss';
import Tag from 'components/common/Tag';
import dateFormat from 'dateformat';
import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';

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
      <Tag tag="태그입니다" />
      <Tag tag="태그2" />
      <Tag tag="자바스크립트" />
    </div>
  </div>
);

export default PostDetailContent;
