import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarkdownRender = ({ markdown }) => {
  return (
    <div className={cx('markdown-body')} dangerouslySetInnerHTML={markdown} />
  );
};

export default MarkdownRender;
