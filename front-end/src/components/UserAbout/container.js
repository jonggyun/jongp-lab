import React, { Component } from 'react';
import UserAbout from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  propType = {
    getUserAbout: PropTypes.func.isRequired,
    about: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const { getUserAbout } = this.props;
    getUserAbout();
  }

  render() {
    const { about } = this.props;
    return <UserAbout about={about} />;
  }
}

export default Container;
