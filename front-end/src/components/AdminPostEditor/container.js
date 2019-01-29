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
    content: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    addPost: PropTypes.func.isRequired,
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
    const { title, tags, isPublic } = this.state;
    const { content, categoryId, addPost } = this.props;

    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!tags) {
      alert('태그를 입력해주세요.');
      return;
    }
    console.log('submit', title, tags, content, isPublic, categoryId);
    addPost({ title, tags, content, isPublic, category: categoryId });
  };

  _handlePublic = () => {
    const { isPublic } = this.state;
    this.setState({
      isPublic: !isPublic,
    });
  };
}

export default Container;
