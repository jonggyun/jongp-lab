import React, { Component } from 'react';
import AdminPostEditor from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    title: '',
    tags: '',
    isPublic: true,
    post: '',
    type: 'create',
  };

  static propTyes = {
    setTitle: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    addPost: PropTypes.func.isRequired,
    modifyPost: PropTypes.func.isRequired,
    getPostDetail: PropTypes.func.isRequired,
    post: PropTypes.shape({
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      public: PropTypes.bool.isRequired,
      subtitle: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      writer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
      _id: PropTypes.string.isRequired,
    }),
    setPostDetail: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getCategory } = this.props;
    const {
      match: {
        params: { postId },
      },
      getPostDetail,
    } = this.props;
    if (postId) {
      getPostDetail(postId);
      this.setState({
        type: 'modify',
      });
    }
    getCategory();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.post && nextProps.post !== prevState.post) {
      const {
        post: { title, tags },
      } = nextProps;
      return {
        post: nextProps.post,
        title,
        tags,
      };
    }
    return null;
  }

  render() {
    const { isPublic, title, type, tags } = this.state;
    const { categories, content } = this.props;

    return (
      <AdminPostEditor
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handlePublic={this._handlePublic}
        isPublic={isPublic}
        categories={categories}
        content={content}
        title={title}
        tags={tags}
        type={type}
      />
    );
  }

  componentWillUnmount() {
    const { setPostDetail } = this.props;
    setPostDetail();
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
    const { title, isPublic, type } = this.state;
    let { tags } = this.state;
    const {
      content,
      categoryId,
      addPost,
      modifyPost,
      history,
      match: {
        params: { postId },
      },
    } = this.props;

    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!tags) {
      alert('태그를 입력해주세요.');
      return;
    }
    const subtitle = this.checkRegExp();
    const data = {
      title,
      tags: (() => {
        if (Array.isArray(tags)) {
          return tags.join();
        }
        return tags;
      })(),
      content,
      isPublic,
      category: categoryId,
      subtitle,
      postId,
    };
    console.log('send data', data);
    type === 'create' ? addPost(data) : modifyPost(data);
    history.push('/admin/post');
  };

  _handlePublic = () => {
    const { isPublic } = this.state;
    this.setState({
      isPublic: !isPublic,
    });
  };

  checkRegExp = () => {
    let { content } = this.props;
    const regExp = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/gi;
    if (regExp.test(content)) {
      const t = content.replace(regExp, '');
      content = t.trim();
    }
    return content.replace(/\s/g, ' ').slice(0, 100);
  };
}

export default Container;
