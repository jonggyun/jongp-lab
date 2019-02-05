import React from 'react';
import styles from './styles.module.scss';
import PostDetailContent from 'components/common/PostDetailContent';
// import PostDetailComment from 'components/common/PostDetailComment';

const PostDetail = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetail}>
        {props.post && <PostDetailContent post={props.post} />}
        {/* <PostDetailComment /> */}
      </div>
    </div>
  );
};

export default PostDetail;
