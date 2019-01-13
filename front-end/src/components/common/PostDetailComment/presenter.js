import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/common/Button';

const PostDetailComment = props => (
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
    <Comments />
  </React.Fragment>
);

const Comments = props => (
  <div className={styles.comments}>
    <div className={styles.info}>
      <div className={styles.writer}>작성자명</div>
      <div className={styles.createdAt}>2019-01-01</div>
    </div>
    <div className={styles.content}>댓글내용입니다..</div>
    <div className={styles.buttonLocation}>
      <Button name="삭제" />
    </div>
  </div>
);

export default PostDetailComment;
