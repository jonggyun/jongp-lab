import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const LeftMenu = props => (
  <section className={styles.leftMenu}>
    <div className={styles.title}>
      <Link to="/admin">
        <p>jongp-Lab</p>
        <p>Admin</p>
      </Link>
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

export default LeftMenu;
