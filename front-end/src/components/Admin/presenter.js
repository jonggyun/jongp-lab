import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Admin = props => <LoginBox {...props} />;

const LoginBox = props => (
  <section className={styles.wrap}>
    <div className={styles.loginBox}>
      <input
        type="text"
        className={styles.username}
        placeholder="username"
        name="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        className={styles.password}
        placeholder="password"
        name="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyPress}
      />
      <button className={styles.loginBtn} onClick={props.handleSubmit}>
        LOGIN
      </button>
      <div className={styles.footer}>made by JongGyun Park</div>
    </div>
  </section>
);

Admin.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
};

export default Admin;
