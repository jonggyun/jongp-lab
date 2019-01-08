import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from 'components/common/admin/LeftMenu';
import Header from 'components/common/admin/Header';
import styles from './styles.module.scss';

const AdminAbout = props => (
  <div className={styles.wrap}>
    <LeftMenu />
    <div className={styles.rightContent}>
      <Header type="about" />
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
