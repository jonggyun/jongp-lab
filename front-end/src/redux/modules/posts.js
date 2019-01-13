// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions
const SET_POSTS = 'SET_POSTS';

// action creators
const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts,
  };
};

// api actions
const getPosts = () => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch('/admin/post', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
          return;
        }
        console.log(response);
        return response.json();
      })
      .then(json => {
        dispatch(setPosts(json));
      });
  };
};

// initial state
const initialState = {};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return applySetPosts(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetPosts = (state, action) => {
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
