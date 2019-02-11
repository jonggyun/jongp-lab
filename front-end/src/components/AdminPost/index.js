import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as postActions } from 'redux/modules/posts';

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { posts, isLast },
  } = state;
  return {
    posts,
    isLast,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: () => dispatch(postActions.getPosts()),
    getOldPosts: lastPostId => dispatch(postActions.getOldPosts(lastPostId)),
    setPosts: () => dispatch(postActions.setPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
