import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/common/Button';
import PropTypes from 'prop-types';
import Ionicons from 'react-ionicons';

const AddCategory = props => (
  <div>
    <div className={styles.input}>
      <input
        type="text"
        placeholder="id"
        name="id"
        value={props.idValue}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="name"
        name="name"
        value={props.nameValue}
        onChange={props.handleInputChange}
      />
      <div className={styles.public}>
        Public
        {props.isPublic ? (
          <Ionicons
            className={styles.icon}
            icon="md-checkbox-outline"
            fontSize="30px"
            color="black"
            onClick={props.handlePublic}
          />
        ) : (
          <Ionicons
            className={styles.icon}
            icon="md-square-outline"
            fontSize="30px"
            color="black"
            onClick={props.handlePublic}
          />
        )}
      </div>
    </div>
    <div className={styles.buttons}>
      <Button name="취소" handleClick={props.handleClickModal} />
      <Button name="저장" handleClick={props.handleSubmit} />
    </div>
  </div>
);

AddCategory.propType = {
  handleClickModal: PropTypes.func.isRequired,
  handleInputChagne: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePublic: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
};

export default AddCategory;
