// imports

// actions
const SET_CONTENT = 'SET_CONTENT';

// action creators
const setContent = content => {
  return {
    type: SET_CONTENT,
    content,
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

// exports
const actionCreators = {
  setContent,
};

export { actionCreators };

// reducer exports
export default reducer;
