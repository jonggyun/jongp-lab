import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {
    editor: { content },
  } = state;
  return {
    content,
  };
};

export default connect(mapStateToProps)(withRouter(Container));
