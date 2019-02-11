import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {
    admin,
    router: { location },
  } = state;
  return {
    isLoggedIn: admin.isLoggedIn,
    pathname: location.pathname,
  };
};

export default connect(mapStateToProps)(withRouter(Container));
