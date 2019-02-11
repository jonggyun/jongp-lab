import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as adminActions } from 'redux/modules/admin';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(adminActions.usernameLogin(username, password));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
