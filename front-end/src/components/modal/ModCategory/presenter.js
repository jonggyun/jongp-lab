import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/common/Button';
import PropTypes from 'prop-types';
import Ionicons from 'react-ionicons';

const ModCategory = props => (
  <div>
    <div className={styles.input}>
      <input
        type="text"
        placeholder={props.idPlaceholder}
        name="id"
        value={props.idValue}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder={props.namePlaceholder}
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

ModCategory.propType = {
  handleClickModal: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  idPlaceholder: PropTypes.func.isRequired,
  namePlaceholder: PropTypes.func.isRequired,
};

export default ModCategory;
