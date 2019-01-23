import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';

import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, ownProps) => {
  const {
    category: { categories, clickModal, id },
  } = state;
  return {
    categories,
    clickModal,
    id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setClickModal: clickModal =>
      dispatch(categoryActions.setClickModal(clickModal)),
    getCategory: () => dispatch(categoryActions.getCategory()),
    createCategory: (id, name) =>
      dispatch(categoryActions.createCategory(id, name)),
    selectedCategory: id => dispatch(categoryActions.selectedCategory(id)),
    getCategoryDetail: id => dispatch(categoryActions.getCategoryDetail(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
