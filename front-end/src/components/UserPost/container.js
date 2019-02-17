import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPost from './presenter';

class Container extends Component {
  propType = {
    getCategories: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    getCategoryPosts: PropTypes.func.isRequired,
    getOldPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    setUserPosts: PropTypes.func.isRequired,
  };
  state = {
    loading: false,
    selectedCategory: 'all',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const { getCategories, getPosts } = this.props;
    getCategories();
    getPosts();
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    const { setUserPosts } = this.props;
    setUserPosts();
    window.removeEventListener('scroll', this._handleScroll);
    this.setState({
      loading: false,
    });
  }

  render() {
    const { categories, posts } = this.props;
    return (
      <UserPost
        categories={categories}
        posts={posts}
        handleClick={this._handleClick}
      />
    );
  }

  _handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { loading, selectedCategory } = this.state;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 100) {
      const { isLast, posts, getOldPosts } = this.props;
      if (!loading && !isLast && posts) {
        this.setState({
          loading: true,
        });
        const lastPostId = posts[posts.length - 1].id;
        getOldPosts(lastPostId, selectedCategory);
      }
    } else {
      if (loading) {
        this.setState({
          loading: false,
        });
      }
    }
  };

  _handleClick = event => {
    const name = event.target.getAttribute('name');
    const { getPosts, getCategoryPosts } = this.props;

    window.scrollTo(0, 0);
    name === 'all' ? getPosts() : getCategoryPosts(name);
    this.setState({
      selectedCategory: name,
    });
  };
}

export default Container;
