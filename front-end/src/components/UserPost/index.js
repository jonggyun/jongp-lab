import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as userActions } from 'redux/modules/userSearch';
import { actionCreators as userPostsActions } from 'redux/modules/userPosts';

const mapStateToProps = (state, action) => {
  const { categories } = state.userSearch;
  const { posts } = state.userPosts;
  return {
    categories,
    posts,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    getCategories: () => dispatch(userActions.getCategories()),
    getPosts: () => dispatch(userPostsActions.getPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
