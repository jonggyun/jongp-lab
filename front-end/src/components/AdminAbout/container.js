import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminAbout from './presenter';

class Container extends Component {
  static propType = {
    getAdminAbout: PropTypes.func.isRequired,
    about: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const { getAdminAbout } = this.props;
    getAdminAbout();
  }

  render() {
    const { about } = this.props;
    return <AdminAbout about={about} />;
  }
}

export default Container;
