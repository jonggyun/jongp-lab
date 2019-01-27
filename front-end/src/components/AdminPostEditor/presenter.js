import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import EditorButton from 'components/common/EditorButton';
import Tag from 'components/common/Tag';
import { Link } from 'react-router-dom';
import Editor from 'components/common/Editor';

const cx = classNames.bind(styles);

const AdminPostEditor = ({ editor }) => (
  <div className={cx('wrap')}>
    <div className={cx('editor')}>
      <div className={cx('title')}>
        <input
          type="text"
          className={cx('input')}
          placeholder="제목을 작성해주세요.."
        />
      </div>
      <Editor />
      <div className={cx('inputTag')}>
        <input
          type="text"
          className={cx('input')}
          placeholder="태그를 작성해주세요.."
        />
      </div>
    </div>

    <div className={cx('preview')}>
      <div className={cx('header')}>
        {/* <EditorButton name="포스트 삭제" /> */}
        <Link to="/admin/post">
          <EditorButton name="취소" />
        </Link>
        <EditorButton name="등록" />
      </div>
      <div className={cx('content')}>미리보기 내용이 줄줄줄</div>
      <div className={cx('footer')}>
        <div className={cx('tags')}>
          <Tag tag="태그1" />
          <Tag tag="태그2" />
          <Tag tag="태그3" />
        </div>
      </div>
    </div>
  </div>
);

export default AdminPostEditor;
