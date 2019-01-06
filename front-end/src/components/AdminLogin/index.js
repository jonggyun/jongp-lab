import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
