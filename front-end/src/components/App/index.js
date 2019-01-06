import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {
    user,
    router: { location },
  } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname,
  };
};

export default connect(mapStateToProps)(withRouter(Container));
