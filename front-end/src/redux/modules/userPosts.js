// imports

// actions
const SET_USER_POSTS = 'SET_USER_POSTS';

// action creators
const setUserPosts = posts => {
  return {
    type: SET_USER_POSTS,
    posts,
  };
};

// api actions
const getPosts = () => {
  return dispatch => {
    fetch('/post', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => dispatch(setUserPosts(json)));
  };
};

// initial state
const initialState = {};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POSTS:
      return applySetUserPosts(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetUserPosts = (state, action) => {
  const { posts } = action;
  return {
    ...state,
    posts,
  };
};

// exports
const actionCreators = {
  getPosts,
};

export { actionCreators };
// reducer exports
export default reducer;
