import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminCategory from './presenter';

class Container extends Component {
  state = {
    modalType: '',
  };

  static propType = {
    getCategory: PropTypes.func.isRequired,
    setClickModal: PropTypes.func.isRequired,
    clickModal: PropTypes.bool.isRequired,
    id: PropTypes.string,
    selectedCategory: PropTypes.func.isRequired,
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
        modalType={this.state.modalType}
        handleClickModal={this._handleClickModal}
        handleClickDelete={this._handleClickDelete}
      />
    );
  }

  _handleClickModal = () => {
    const { clickModal, setClickModal } = this.props;
    if (clickModal) {
      setClickModal(false);
    } else {
      setClickModal(true);
      this.setState({
        modalType: 'addcategory',
      });
    }
  };

  _handleClickDelete = event => {
    const {
      currentTarget: {
        parentNode: { id },
      },
    } = event;
    const { clickModal, setClickModal, selectedCategory } = this.props;
    if (clickModal) {
      setClickModal(false);
    } else {
      setClickModal(true);
      this.setState({
        modalType: 'delcategory',
      });
      selectedCategory(id);
    }
  };
}

export default Container;
