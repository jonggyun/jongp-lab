import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './presenter';

class Container extends Component {
  state = {
    id: '',
    name: '',
    isPublic: true,
  };
  static propType = {
    handleClickModal: PropTypes.func.isRequired,
    createCategory: PropTypes.func.isRequired,
  };
  render() {
    const { handleClickModal } = this.props;
    const { id, name, isPublic } = this.state;
    return (
      <AddCategory
        handleClickModal={handleClickModal}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handlePublic={this._handlePublic}
        idValue={id}
        nameValue={name}
        isPublic={isPublic}
      />
    );
  }

  _handlePublic = () => {
    const { isPublic } = this.state;
    if (isPublic) {
      this.setState({
        isPublic: false,
      });
    } else {
      this.setState({
        isPublic: true,
      });
    }
  };

  _handleInputChange = event => {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value, // name으로 들어온 객체의 이름에 value를 입력
    });
  };

  _handleSubmit = () => {
    const { id, name, isPublic } = this.state;
    const { createCategory } = this.props;

    if (!id) {
      alert('id 값을 입력하세요.');
      return;
    }

    if (!name) {
      alert('name 값을 입력하세요.');
      return;
    }
    createCategory(id, name, isPublic);
  };
}

export default Container;
