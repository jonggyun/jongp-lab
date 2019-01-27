import React from 'react';
import styles from './styles.module.scss';
import Ionicons from 'react-ionicons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminHeader = props => (
  <section className={styles.adminHeader}>
    <span className={styles.headerText}>
      {props.type === 'about' && 'About'}
      {props.type === 'category' && 'Category'}
      {props.type === 'post' && 'Post'}
    </span>
    {props.type === 'about' && (
      <Ionicons icon="md-create" fontSize="30px" color="black" />
    )}
    {props.type === 'category' && (
      <Ionicons
        icon="md-add-circle"
        fontSize="30px"
        color="black"
        onClick={props.handleClickModal}
      />
    )}
    {props.type === 'post' && (
      <div>
        <Link to="/admin/editor">
          <Ionicons icon="md-add-circle" fontSize="30px" color="black" />
        </Link>
        <Ionicons icon="md-close-circle" fontSize="30px" color="black" />
      </div>
    )}
  </section>
);

AdminHeader.propType = {
  handleClickModal: PropTypes.func.isRequired,
};

export default AdminHeader;
