import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const AdminLeft = props => (
  <section className={styles.leftMenu}>
    <div className={styles.title}>
      <p>jongp-Lab</p>
      <p>Admin</p>
    </div>
    <nav className={styles.menuNav}>
      <ul className={styles.menuList}>
        <li>
          <Link to="/admin/about">About</Link>
        </li>
        <li>
          <Link to="/admin/category">Category</Link>
        </li>
        <li>
          <Link to="/admin/post">Post</Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default AdminLeft;
