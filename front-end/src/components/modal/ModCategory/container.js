import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModCategory from './presenter';

class Container extends Component {
  static propType = {
    handleClickModal: PropTypes.func.isRequired,
    getCategoryDetail: PropTypes.func.isRequired,
    modifyCategory: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
  };

  state = {
    id: '',
    name: '',
    isPublic: true,
  };

  componentDidMount() {
    const { _id, getCategoryDetail } = this.props;
    getCategoryDetail(_id);
  }

  render() {
    const {
      category: { detail },
      handleClickModal,
    } = this.props;
    return (
      <ModCategory
        handleClickModal={handleClickModal}
        idValue={this.state.id}
        nameValue={this.state.name}
        handleInputChange={this._handleInputChange}
        idPlaceholder={detail.id}
        namePlaceholder={detail.name}
        handleSubmit={this._handleSubmit}
        handlePublic={this._handlePublic}
        isPublic={this.state.isPublic}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = () => {
    const { isPublic } = this.state;
    let { id, name } = this.state;
    const {
      category: { detail },
      modifyCategory,
      _id,
    } = this.props;

    if (id === '') id = detail.id;
    if (name === '') name = detail.name;

    console.log(_id, id, name, isPublic);
    modifyCategory(_id, id, name, isPublic);
  };

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
}

export default Container;
