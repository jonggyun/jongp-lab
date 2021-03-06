import React from 'react';
import AddCategory from 'components/modal/AddCategory';
import DelCategory from 'components/modal/DelCategory';
import ModCategory from 'components/modal/ModCategory';

import styles from './styles.module.scss';

const Modal = props => (
  <div className={styles.modalWrap}>
    <div className={styles.modal}>
      <div className={styles.header}>{props.name}</div>
      {props.type === 'addcategory' && <AddCategory {...props} />}
      {props.type === 'delcategory' && <DelCategory {...props} />}
      {props.type === 'modcategory' && <ModCategory {...props} />}
    </div>
  </div>
);

export default Modal;
