import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

export default connect()(withRouter(Container));
