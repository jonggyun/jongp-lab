import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';
import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, ownProps) => {
  const {
    category: { id },
  } = state;
  return {
    id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCategory: (id, name, isPublic) => {
      dispatch(categoryActions.createCategory(id, name, isPublic));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
