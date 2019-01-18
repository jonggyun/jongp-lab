import React from 'react';
import Button from 'components/common/Button';
import styles from './styles.module.scss';

const Modal = props => (
  <div className={styles.modalWrap}>
    <div className={styles.modal}>
      <div className={styles.header}>카테고리 등록/수정</div>
      <div className={styles.input}>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="NAME" />
        <div className={styles.public}>Public</div>
      </div>
      <div className={styles.buttons}>
        <Button name="취소" handleClick={props.handleClickModal} />
        <Button name="저장" />
      </div>
    </div>
  </div>
);

export default Modal;
