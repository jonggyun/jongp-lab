import React, { Component } from 'react';
import AdminPostEditor from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    title: '',
    tags: '',
    isPublic: true,
  };

  static propTyes = {
    setTitle: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  render() {
    return (
      <AdminPostEditor
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handlePublic={this._handlePublic}
        isPublic={this.state.isPublic}
        categories={this.props.categories}
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

  _handlePublic = () => {
    const { isPublic } = this.state;
    this.setState({
      isPublic: !isPublic,
    });
  };
}

export default Container;
