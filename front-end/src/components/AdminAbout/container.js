import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminAbout from './presenter';

class Container extends Component {
  static propType = {
    getAdminAbout: PropTypes.func.isRequired,
    initAbout: PropTypes.func.isRequired,
    about: PropTypes.string.isRequired,
    saveAdminAbout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getAdminAbout } = this.props;
    getAdminAbout();
  }

  componentWillUnmount() {
    const { setAbout } = this.props;
    setAbout('');
  }
  render() {
    const { about } = this.props;
    return <AdminAbout about={about} handleSubmit={this._handleSubmit} />;
  }

  _handleSubmit = () => {
    const { saveAdminAbout } = this.props;
    saveAdminAbout();
  };
}

export default Container;
