import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminPost from './presenter';

class Container extends Component {
  static propType = {
    posts: PropTypes.arrayOf.isRequired,
    isLast: PropTypes.bool.isRequired,
    getPosts: PropTypes.func.isRequired,
    getOldPosts: PropTypes.func.isRequired,
    setPosts: PropTypes.func.isRequired,
  };
  state = {
    loading: false,
  };
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
    window.addEventListener('scroll', this._handleScroll);
  }
  componentWillUnmount() {
    const { setPosts } = this.props;
    setPosts();
    window.removeEventListener('scroll', this._handleScroll);
    this.setState({
      loading: false,
    });
  }
  render() {
    return <AdminPost posts={this.props.posts} />;
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
      }
    }
  };
}

export default Container;
