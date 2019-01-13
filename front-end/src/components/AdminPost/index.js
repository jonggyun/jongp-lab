import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as postActions } from 'redux/modules/posts';

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { posts },
  } = state;
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: () => dispatch(postActions.getPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));