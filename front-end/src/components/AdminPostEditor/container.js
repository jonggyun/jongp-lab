import React, { Component } from 'react';
import AdminPostEditor from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    title: '',
    tags: '',
  };
  static propTyes = {
    setTitle: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
  };
  render() {
    return (
      <AdminPostEditor
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
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
    const { title, tags } = this.state;
    console.log('submit', title, tags);
  };
}

export default Container;
