import React from 'react';
import PropTypes from 'prop-types';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import AdminHeader from 'components/common/AdminHeader';
import Modal from 'components/common/Modal';
import styles from './styles.module.scss';
import Ionicons from 'react-ionicons';

const AdminCategory = props => (
  <React.Fragment>
    {props.clickModal && props.modalType === 'addcategory' && (
      <div>
        <Modal
          handleClickModal={props.handleClickModal}
          name="카테고리 등록/수정"
          type="addcategory"
        />
      </div>
    )}
    {props.clickModal && props.modalType === 'delcategory' && (
      <div>
        <Modal
          handleClickModal={props.handleClickModal}
          name="카테고리 삭제"
          type="delcategory"
        />
      </div>
    )}
    <div className={styles.wrap}>
      <AdminLeftMenu />
      <section className={styles.rightContent}>
        <AdminHeader
          type="category"
          handleClickModal={props.handleClickModal}
        />
        <div className={styles.template}>
          <ul>{props.categories && <Categories {...props} />}</ul>
        </div>
      </section>
    </div>
  </React.Fragment>
);

AdminCategory.propType = {
  categories: PropTypes.arrayOf,
  getCategory: PropTypes.func.isRequired,
  clickModal: PropTypes.bool.isRequired,
  handleClickModal: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

const Categories = props =>
  props.categories.map(category => (
    <li className={styles.list} key={category._id} id={category._id}>
      <Ionicons
        className={styles.icon}
        icon="md-square-outline"
        fontSize="30px"
        color="black"
      />
      <span className={styles.content}>{category.id}</span>
      <span className={styles.content}>{category.name}</span>
      <Ionicons
        className={styles.icon}
        icon="md-checkbox-outline"
        fontSize="30px"
        color="black"
      />
      <Ionicons
        className={styles.icon}
        icon="md-create"
        fontSize="30px"
        color="black"
      />
      <Ionicons
        className={styles.icon}
        icon="md-close-circle"
        fontSize="30px"
        color="black"
        onClick={props.handleClickDelete}
      />
    </li>
  ));

export default AdminCategory;
