// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions
const SET_POSTS = 'SET_POSTS';
const SET_POST_DETAIL = 'SET_POST_DETAIL';

// action creators
const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts,
  };
};

const setPostDetail = post => {
  return {
    type: SET_POST_DETAIL,
    post,
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
        return response.json();
      })
      .then(json => {
        dispatch(setPosts(json));
      });
  };
};

const getPostDetail = postId => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch(`/admin/post/${postId}`, {
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
        return response.json();
      })
      .then(json => {
        dispatch(setPostDetail(json));
      });
  };
};

const setPost = (title, content, tags) => {
  // writer, category, title, content, public, tags
  return (dispatch, getState) => {
    const {
      user: { token, id },
    } = getState();
    fetch('/admin/post', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        wrtier: id,
        title,
        content,
        tags,
      }),
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
    case SET_POST_DETAIL:
      return applySetPostDetail(state, action);
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

const applySetPostDetail = (state, action) => {
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
