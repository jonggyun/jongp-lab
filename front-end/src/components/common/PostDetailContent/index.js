import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';

import { actionCreators as postsActions } from 'redux/modules/posts';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removePost: postId => dispatch(postsActions.removePost(postId)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
