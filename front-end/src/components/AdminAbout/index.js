import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as adminActions } from 'redux/modules/admin';

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  const { about } = state.admin;
  return {
    about,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAdminAbout: () => dispatch(adminActions.getAdminAbout()),
    setAbout: about => dispatch(adminActions.setAbout(about)),
    saveAdminAbout: () => dispatch(adminActions.saveAdminAbout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
