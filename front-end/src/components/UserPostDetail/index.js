import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as userPostsActions } from 'redux/modules/userPosts';

const mapStateToProps = (state, ownProps) => {
  const { post } = state.userPosts;
  return {
    post,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { postId } = ownProps.match.params;
  return {
    getPostDetail: () => dispatch(userPostsActions.getPostDetail(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
