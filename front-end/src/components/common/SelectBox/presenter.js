import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const SelectBox = ({ items, handleChange, value }) => (
  <div>
    <select className={styles.selectBox} onChange={handleChange} value={value}>
      {items && <Items items={items} />}
    </select>
  </div>
);

SelectBox.propType = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Items = ({ items }) =>
  items.map(item => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
export default SelectBox;
