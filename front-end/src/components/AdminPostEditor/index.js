import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as editorActions } from 'redux/modules/editor';
import { actionCreators as categoryActions } from 'redux/modules/category';
import { actionCreators as postsActions } from 'redux/modules/posts';

const mapStateToProps = (state, action) => {
  const {
    editor: { content },
    category: { categories },
    posts: { categoryId },
  } = state;
  return {
    content,
    categories,
    categoryId,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    setTitle: title => dispatch(editorActions.setTitle(title)),
    setTags: tags => dispatch(editorActions.setTags(tags)),
    getCategory: () => dispatch(categoryActions.getCategory()),
    addPost: data => dispatch(postsActions.addPost(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
