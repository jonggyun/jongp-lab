import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as editorActions } from 'redux/modules/editor';
import { actionCreators as categoryActions } from 'redux/modules/category';

const mapStateToProps = (state, action) => {
  const {
    editor: { content },
    category: { categories },
  } = state;
  return {
    content,
    categories,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    setTitle: title => dispatch(editorActions.setTitle(title)),
    setTags: tags => dispatch(editorActions.setTags(tags)),
    getCategory: () => dispatch(categoryActions.getCategory()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
