import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';
import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, ownProps) => {
  const {
    category: { id },
  } = state;
  return {
    ...state,
    _id: id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategoryDetail: id => dispatch(categoryActions.getCategoryDetail(id)),
    modifyCategory: (_id, id, name, isPublic) =>
      dispatch(categoryActions.modifyCategory(_id, id, name, isPublic)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
