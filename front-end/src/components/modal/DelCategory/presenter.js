import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';

const DelCategory = props => (
  <div className={styles.wrapper}>
    <div className={styles.message}>
      <span>정말로 삭제하시겠습니까?</span>
    </div>
    <div className={styles.buttons}>
      <Button name="취소" handleClick={props.handleClickModal} />
      <Button name="삭제" handleClick={props.handleClickDelete} />
    </div>
  </div>
);

DelCategory.propType = {
  handleClickModal: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default DelCategory;
