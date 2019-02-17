import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as userAboutActions } from 'redux/modules/userAbout';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const { about } = state.userAbout;
  return {
    about,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserAbout: () => dispatch(userAboutActions.getUserAbout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
