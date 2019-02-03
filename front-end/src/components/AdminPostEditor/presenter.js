import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ionicons from 'react-ionicons';

import EditorButton from 'components/common/EditorButton';
import MarkdownEditor from 'components/common/MarkdownEditor';
import MarkdownRender from 'components/common/MarkdownRender';
import SelectBox from 'components/common/SelectBox';

const cx = classNames.bind(styles);

const AdminPostEditor = ({
  handleInputChange,
  handleSubmit,
  isPublic,
  handlePublic,
  categories,
  content,
  title,
  tags,
  type,
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
          value={title}
        />
      </div>
      <MarkdownEditor initContent={content} />
      <div className={cx('inputTag')}>
        <input
          type="text"
          className={cx('input')}
          placeholder="태그를 작성해주세요.."
          onChange={handleInputChange}
          name="tags"
          value={tags}
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
        <EditorButton
          name={type === 'create' ? '등록' : '수정'}
          handleClick={handleSubmit}
        />
      </div>
      <div className={cx('content')}>
        <MarkdownRender content={content} />
      </div>
    </div>
  </div>
);

AdminPostEditor.propType = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePublic: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
  content: PropTypes.string,
};

export default AdminPostEditor;
