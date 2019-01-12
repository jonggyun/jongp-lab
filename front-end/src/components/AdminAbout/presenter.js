import React from 'react';
import PropTypes from 'prop-types';
import AdminLeftMenu from 'components/common/AdminLeftMenu';
import AdminHeader from 'components/common/AdminHeader';
import styles from './styles.module.scss';

const AdminAbout = props => (
  <div className={styles.wrap}>
    <AdminLeftMenu />
    <div className={styles.rightContent}>
      <AdminHeader type="about" />
      {props.about && <AboutTemplate {...props} />}
    </div>
  </div>
);

AdminAbout.propType = {
  about: PropTypes.string.isRequired,
};

const AboutTemplate = props => {
  const { about } = props;

  return <section className={styles.template}>{about}</section>;
};

export default AdminAbout;
