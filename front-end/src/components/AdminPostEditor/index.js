import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as editorActions } from 'redux/modules/editor';

const mapStateToProps = (state, action) => {
  const {
    editor: { content },
  } = state;
  return {
    content,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    setTitle: title => dispatch(editorActions.setTitle(title)),
    setTags: tags => dispatch(editorActions.setTags(tags)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
