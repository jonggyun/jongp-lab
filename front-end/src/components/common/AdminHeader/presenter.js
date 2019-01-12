import React from 'react';
import styles from './styles.module.scss';
import Ionicons from 'react-ionicons';

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
      <Ionicons icon="md-add-circle" fontSize="30px" color="black" />
    )}
    {props.type === 'post' && (
      <div>
        <Ionicons icon="md-add-circle" fontSize="30px" color="black" />
        <Ionicons icon="md-close-circle" fontSize="30px" color="black" />
      </div>
    )}
  </section>
);

export default AdminHeader;
