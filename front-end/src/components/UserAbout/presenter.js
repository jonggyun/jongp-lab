import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import UserHeader from 'components/common/UserHeader';
import MarkdownRender from 'components/common/MarkdownRender';

const UserAbout = ({ about }) => (
  <React.Fragment>
    <UserHeader />
    <section className={styles.userAbout}>
      <article className={styles.content}>
        <MarkdownRender content={about} />
      </article>
    </section>
  </React.Fragment>
);

UserAbout.propType = {
  about: PropTypes.string.isRequired,
};

export default UserAbout;
