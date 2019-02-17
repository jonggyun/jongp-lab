import React from 'react';
import styles from './styles.module.scss';
import dateFormat from 'dateformat';
import defaultThunmbnail from 'images/default.png';
import defaultProfile from 'images/default-profile-picture.jpg';
import PropType from 'prop-types';

import Tag from 'components/common/Tag';
import MarkdownRender from 'components/common/MarkdownRender';

const PostDetailContent = ({ post, isAdmin, handleDelete, handleModify }) => (
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
      {/* <div className={styles.subtitle}>{post.subtitle}</div> */}
    </div>
    {isAdmin && (
      <div className={styles.buttons}>
        <div className={styles.button}>
          <span onClick={handleDelete}>삭제</span>
        </div>
        <div className={styles.button}>
          <span onClick={handleModify}>수정</span>
        </div>
      </div>
    )}
    <img
      className={styles.thumbnail}
      src={
        post.thumbnail
          ? 'http://localhost:8001/' + post.thumbnail
          : defaultThunmbnail
      }
      alt="thumbnail"
    />
    <div className={styles.content}>
      <MarkdownRender content={post.content} />
    </div>
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
  handleDelete: PropType.func.isRequired,
  handleModify: PropType.func.isRequired,
};

const Tags = ({ tags }) => {
  let index = 0;
  return tags.map(tag => <Tag key={index++} tag={tag} />);
};

export default PostDetailContent;
