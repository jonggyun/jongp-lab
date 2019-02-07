import React, { Component } from 'react';
import AdminPostEditor from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    title: '',
    tags: '',
    isPublic: true,
    post: '',
    type: '',
    thumbnail: '',
  };

  static propTyes = {
    setTitle: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
    setContent: PropTypes.func.isRequired,
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

    postId
      ? this.setState({ type: 'modify' })
      : this.setState({ type: 'create' });

    postId && getPostDetail(postId);
    getCategory();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      match: {
        params: { postId },
      },
      post,
      setContent,
    } = nextProps;
    if (postId && post && prevState.title === '') {
      setContent(post.content);
      return {
        post,
        title: post.title,
        tags: post.tags,
      };
    }
    return null;
  }

  render() {
    const { isPublic, title, tags, type } = this.state;
    const { categories, content } = this.props;
    return (
      <AdminPostEditor
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handlePublic={this._handlePublic}
        handleUploadFile={this._handleUploadFile}
        isPublic={isPublic}
        categories={categories}
        content={content}
        title={title}
        tags={tags}
        type={type}
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
    const { title, isPublic, type, thumbnail } = this.state;
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
      thumbnail: thumbnail ? thumbnail : false,
    };

    type === 'create' && addPost(data);
    type === 'modify' && modifyPost(data);
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

  _handleUploadFile = event => {
    const {
      target: { files },
    } = event;
    this.setState({
      thumbnail: files[0],
    });
  };
}

export default Container;
