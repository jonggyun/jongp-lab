import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const {
    user: { about },
  } = state;
  return {
    about,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAdminAbout: () => {
      dispatch(userActions.getAdminAbout());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
