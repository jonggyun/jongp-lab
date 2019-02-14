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
    id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCategory: id => {
      dispatch(categoryActions.deleteCategory(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
