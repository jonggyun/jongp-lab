import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminCategory from './presenter';

class Container extends Component {
  static propType = {
    getCategory: PropTypes.func.isRequired,
  };
  state = {
    clickModal: false,
  };
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }
  render() {
    return (
      <AdminCategory
        {...this.props}
        clickModal={this.state.clickModal}
        handleClickModal={this._handleClickModal}
      />
    );
  }

  _handleClickModal = () => {
    const { clickModal } = this.state;
    if (clickModal) {
      this.setState({
        clickModal: false,
      });
    } else {
      this.setState({
        clickModal: true,
      });
    }
  };
}

export default Container;
