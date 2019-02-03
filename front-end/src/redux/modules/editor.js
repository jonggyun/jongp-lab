// imports

// actions
const SET_CONTENT = 'SET_CONTENT';
const INITIALIZE_EDITOR = 'INITIALIZE_EDITOR';

// action creators
const setContent = content => {
  return {
    type: SET_CONTENT,
    content,
  };
};

const initializeEditor = ({ title, content, tags }) => {
  return {
    type: INITIALIZE_EDITOR,
    title,
    content,
    tags,
  };
};

// api actions

// initial state
const initialState = {
  title: '',
  content: '',
  tags: '',
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return applySetContent(state, action);
    case INITIALIZE_EDITOR:
      return applyInitializeEditor(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetContent = (state, action) => {
  const { content } = action;
  return {
    ...state,
    content,
  };
};

const applyInitializeEditor = (state, action) => {
  const { title, content, tags } = action;
  return {
    title,
    content,
    tags,
  };
};

// exports
const actionCreators = {
  setContent,
  initializeEditor,
};

export { actionCreators };

// reducer exports
export default reducer;
