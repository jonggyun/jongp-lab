import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from 'components/common/admin/LeftMenu';
import Header from 'components/common/admin/Header';
import styles from './styles.module.scss';
import Ionicons from 'react-ionicons';

const AdminCategory = props => (
  <div className={styles.wrap}>
    <LeftMenu />
    <div className={styles.rightContent}>
      <Header type="category" />
      <div className={styles.template}>
        <ul>{props.categoryList && <CategoryList {...props} />}</ul>
      </div>
    </div>
  </div>
);

AdminCategory.propType = {
  getCategory: PropTypes.func.isRequired,
};

const CategoryList = props =>
  props.categoryList.map(category => (
    <li className={styles.list} key={category._id}>
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
      />
    </li>
  ));

export default AdminCategory;
