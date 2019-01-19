import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminCategory from './presenter';

class Container extends Component {
  static propType = {
    getCategory: PropTypes.func.isRequired,
    setClickModal: PropTypes.func.isRequired,
    clickModal: PropTypes.bool.isRequired,
  };
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  render() {
    return (
      <AdminCategory
        {...this.props}
        clickModal={this.props.clickModal}
        handleClickModal={this._handleClickModal}
      />
    );
  }

  _handleClickModal = () => {
    const { clickModal, setClickModal } = this.props;
    if (clickModal) {
      setClickModal(false);
    } else {
      setClickModal(true);
    }
  };
}

export default Container;
