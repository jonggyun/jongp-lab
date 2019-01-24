// imports

// actions
const SET_COMMENTS = 'SET_COMMENTS';

// action creators
const setComments = comments => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

// api actions
const getAdminComments = postId => {
  return dispatch => {
    fetch(`/admin/post/${postId}/comment`)
      .then(response => response.json())
      .then(json => dispatch(setComments(json)));
  };
};

// initial state
const initialState = {};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return applySetComments(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetComments = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments,
  };
};

// exports
const actionCreators = {
  getAdminComments,
};

export { actionCreators };

// reducer exports
export default reducer;
