import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/common/Button';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

const PostDetailComment = ({ comments }) => (
  <React.Fragment>
    <div>
      <div className={styles.inputComment}>
        <div className={styles.count}>0개의 댓글</div>
        <div className={styles.inputs}>
          <div className={styles.inputBox}>
            <input type="text" className={styles.box} placeholder="작성자명" />
            <input
              type="password"
              className={styles.box}
              placeholder="비밀번호"
            />
          </div>
          <div>
            <textarea className={styles.textarea} />
          </div>
          <div className={styles.buttonLocation}>
            <Button name="작성" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.emptySpace} />
    {comments && <Comments comments={comments} />}
  </React.Fragment>
);

PostDetailComment.propType = {
  PostDetailComment: PropTypes.func.isRequired,
};

const Comments = ({ comments }) => {
  return comments.map(comment => (
    <div className={styles.comments} key={comment._id}>
      <div className={styles.info}>
        <div className={styles.writer}>{comment.writer}</div>
        <div className={styles.createdAt}>
          {dateFormat(comment.updatedAt, 'isoDate')}
        </div>
      </div>
      <div className={styles.content}>{comment.content}</div>
      <div className={styles.buttonLocation}>
        <Button name="삭제" />
      </div>
    </div>
  ));
};

export default PostDetailComment;
