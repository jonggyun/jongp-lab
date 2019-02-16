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
  };

  componentDidMount() {
    const { getCategories, getPosts } = this.props;
    getCategories();
    getPosts();
    console.log(this.state.loading);
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
        handlePosts={this._handlePosts}
      />
    );
  }

  _handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 100) {
      if (!this.state.loading && !this.props.isLast && this.props.posts) {
        this.setState({
          loading: true,
        });
        const lastPostId = this.props.posts[this.props.posts.length - 1].id;
        this.props.getOldPosts(lastPostId);
      }
    } else {
      if (this.state.loading) {
        this.setState({
          loading: false,
        });
        console.log(this.state.loading);
      }
    }
  };

  _handlePosts = event => {
    const name = event.target.getAttribute('name');
    const { getPosts, getCategoryPosts } = this.props;
    //console.log(event.target, name);
    name === 'all' ? getPosts() : getCategoryPosts(name);
  };
}

export default Container;
