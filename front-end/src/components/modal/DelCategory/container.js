import React, { Component } from 'react';
import DelCategory from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  static propType = {
    handleClickModal: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    deleteCategory: PropTypes.func.isRequired,
  };

  state = {
    id: '',
  };

  render() {
    const { handleClickModal } = this.props;
    return (
      <DelCategory
        handleClickModal={handleClickModal}
        handleClickDelete={this._handleClickDelete}
      />
    );
  }

  _handleClickDelete = event => {
    const { id, deleteCategory } = this.props;
    // 여기서 삭제 처리하기.
    deleteCategory(id);
  };
}

export default Container;
