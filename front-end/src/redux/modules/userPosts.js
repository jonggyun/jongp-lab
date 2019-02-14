// imports

// actions
const SET_USER_POSTS = 'SET_USER_POSTS';
const SET_USER_POST_DETAIL = 'SET_USER_POST_DETAIL';

// action creators
const setUserPosts = posts => {
  return {
    type: SET_USER_POSTS,
    posts,
  };
};

const setUserPostDetail = post => {
  return {
    type: SET_USER_POST_DETAIL,
    post,
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

const getPostDetail = postId => {
  return dispatch => {
    fetch(`/post/${postId}`, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('json!!!!', json);
        dispatch(setUserPostDetail(json));
      });
  };
};

// initial state
const initialState = {};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POSTS:
      return applySetUserPosts(state, action);
    case SET_USER_POST_DETAIL:
      return applySetUserPostDetail(state, action);
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

const applySetUserPostDetail = (state, action) => {
  const { post } = action;
  return {
    ...state,
    post,
  };
};

// exports
const actionCreators = {
  getPosts,
  getPostDetail,
};

export { actionCreators };
// reducer exports
export default reducer;
