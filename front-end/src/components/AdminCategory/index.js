import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, ownProps) => {
  const {
    category: { categories },
  } = state;
  return {
    categories,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategory: () => dispatch(categoryActions.getCategory()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));