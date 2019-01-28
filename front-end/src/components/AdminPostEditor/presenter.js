import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ionicons from 'react-ionicons';

import EditorButton from 'components/common/EditorButton';
import Editor from 'components/common/Editor';
import MarkdownRender from 'components/common/MarkdownRender';
import SelectBox from 'components/common/SelectBox';

const cx = classNames.bind(styles);

const AdminPostEditor = ({
  handleInputChange,
  handleSubmit,
  isPublic,
  handlePublic,
  categories,
}) => (
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
        <div className={cx('categories')}>
          <SelectBox items={categories} />
        </div>
        <div className={cx('isPublic')}>
          <span>PUBLIC</span>
          {isPublic && (
            <Ionicons
              className={styles.icon}
              icon="md-checkbox-outline"
              fontSize="30px"
              color="white"
              onClick={handlePublic}
            />
          )}
          {!isPublic && (
            <Ionicons
              className={styles.icon}
              icon="md-square-outline"
              fontSize="30px"
              color="white"
              onClick={handlePublic}
            />
          )}
        </div>
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
  handlePublic: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
};

export default AdminPostEditor;
