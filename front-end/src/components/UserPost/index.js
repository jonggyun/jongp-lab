import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as userActions } from 'redux/modules/userSearch';
import { actionCreators as userPostsActions } from 'redux/modules/userPosts';

const mapStateToProps = (state, ownProps) => {
  const { categories } = state.userSearch;
  const { posts } = state.userPosts;
  return {
    categories,
    posts,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategories: () => dispatch(userActions.getCategories()),
    getPosts: () => dispatch(userPostsActions.getPosts()),
    getCategoryPosts: categoryId =>
      dispatch(userPostsActions.getCategoryPosts(categoryId)),
    setUserPost: () => dispatch(userPostsActions.setUserPost()),
    getOldPosts: lastPostId =>
      dispatch(userPostsActions.getOldPosts(lastPostId)),
    setUserPosts: () => dispatch(userPostsActions.setUserPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
