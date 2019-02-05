import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import EditorButton from 'components/common/EditorButton';
import MarkdownEditor from 'components/common/MarkdownEditor';
import MarkdownRender from 'components/common/MarkdownRender';

const AdminAbout = ({ about, handleSubmit }) => (
  <div className={styles.wrap}>
    <div className={styles.header}>
      <Link to="/admin/">
        <EditorButton name="취소" />
      </Link>
      <EditorButton name="저장" handleClick={handleSubmit} />
    </div>
    <div className={styles.content}>
      <div className={styles.editor}>
        <MarkdownEditor initContent={about} type="about" />
      </div>
      <div className={styles.preview}>
        <MarkdownRender content={about} />
      </div>
    </div>
  </div>
);

AdminAbout.propType = {
  about: PropTypes.string.isRequired,
};

export default AdminAbout;
