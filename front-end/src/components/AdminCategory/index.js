import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, ownProps) => {
  const {
    category: { categories, clickModal },
  } = state;
  return {
    categories,
    clickModal,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setClickModal: clickModal =>
      dispatch(categoryActions.setClickModal(clickModal)),
    getCategory: () => dispatch(categoryActions.getCategory()),
    createCategory: (id, name) =>
      dispatch(categoryActions.createCategory(id, name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
