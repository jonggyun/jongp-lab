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
    posts: { categoryId, post },
  } = state;
  return {
    content,
    categories,
    categoryId,
    post,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    setTitle: title => dispatch(editorActions.setTitle(title)),
    setTags: tags => dispatch(editorActions.setTags(tags)),
    getCategory: () => dispatch(categoryActions.getCategory()),
    addPost: data => dispatch(postsActions.addPost(data)),
    modifyPost: data => dispatch(postsActions.modifyPost(data)),
    getPostDetail: postId => dispatch(postsActions.getPostDetail(postId)),
    setPostDetail: post => dispatch(postsActions.setPostDetail(post)),
    setContent: content => dispatch(editorActions.setContent(content)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
