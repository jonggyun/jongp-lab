import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';
import { actionCreators as categoryActions } from 'redux/modules/category';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCategory: (id, name, isPublic) => {
      dispatch(categoryActions.createCategory(id, name, isPublic));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
