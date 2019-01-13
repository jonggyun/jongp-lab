import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as postActions } from 'redux/modules/posts';

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { post },
  } = state;
  return { post };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { postId },
    },
  } = ownProps;

  return {
    getPostDetail: () => dispatch(postActions.getPostDetail(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
