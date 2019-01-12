import React from 'react';
import PropTypes from 'prop-types';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import AdminHeader from 'components/common/AdminHeader';
import styles from './styles.module.scss';
import Ionicons from 'react-ionicons';

const AdminCategory = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <div className={styles.rightContent}>
      <AdminHeader type="category" />
      <div className={styles.template}>
        <ul>{props.categories && <Categories {...props} />}</ul>
      </div>
    </div>
  </div>
);

AdminCategory.propType = {
  getCategory: PropTypes.func.isRequired,
};

const Categories = props =>
  props.categories.map(category => (
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
