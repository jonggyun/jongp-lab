import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import EditorButton from 'components/common/EditorButton';
import Editor from 'components/common/Editor';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const AdminPostEditor = ({ handleInputChange, handleSubmit }) => (
  <div className={cx('wrap')}>
    <div className={cx('editor')}>
      <div className={cx('title')}>
        <input
          type="text"
          className={cx('input')}
          placeholder="제목을 작성해주세요.."
          onChange={handleInputChange}
          name="title"
        />
      </div>
      <Editor />
      <div className={cx('inputTag')}>
        <input
          type="text"
          className={cx('input')}
          placeholder="태그를 작성해주세요.."
          onChange={handleInputChange}
          name="tags"
        />
      </div>
    </div>

    <div className={cx('preview')}>
      <div className={cx('header')}>
        {/* <EditorButton name="포스트 삭제" /> */}
        <Link to="/admin/post">
          <EditorButton name="취소" />
        </Link>
        <EditorButton name="등록" handleClick={handleSubmit} />
      </div>
      <div className={cx('content')}>
        <MarkdownRender />
      </div>
    </div>
  </div>
);

AdminPostEditor.propType = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AdminPostEditor;
