import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as postsActions } from 'redux/modules/posts';

const mapStateToProps = (state, action) => {
  const { posts } = state.posts;
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    getPosts: () => dispatch(postsActions.getPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
