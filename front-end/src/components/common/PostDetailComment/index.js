import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';
import { actionCreators as commentActions } from 'redux/modules/comment';

const mapStateToProps = (state, ownProps) => {
  const {
    comment: { comments },
  } = state;

  return {
    ...state,
    comments,
  };
};

const mapDispatchToProps = (disaptch, ownProps) => {
  return {
    getAdminComments: postId => {
      disaptch(commentActions.getAdminComments(postId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
