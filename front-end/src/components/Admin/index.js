import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapsDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
  };
};

export default connect(
  null,
  mapsDispatchToProps
)(Container);
