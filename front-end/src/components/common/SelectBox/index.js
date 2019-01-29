import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as postsActions } from 'redux/modules/posts';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPostCategoryId: id => dispatch(postsActions.setPostCategoryId(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
