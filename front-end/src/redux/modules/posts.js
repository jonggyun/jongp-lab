// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions
const SET_POSTS = 'SET_POSTS';
const SET_POST_DETAIL = 'SET_POST_DETAIL';
const SET_POST_CATEGORY_ID = 'SET_POST_CATEGORY_ID';

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

const setPostCategoryId = categoryId => {
  return {
    type: SET_POST_CATEGORY_ID,
    categoryId,
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

const addPost = ({ title, category, content, isPublic, tags, subtitle }) => {
  return (dispatch, getState) => {
    const {
      user: { token, id },
    } = getState();
    fetch('/admin/post', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        writer: id,
        title,
        subtitle,
        category,
        content,
        public: isPublic,
        tags,
      }),
    }).then(response => {
      if (response.status === 200) {
      }
    });
  };
};

const removePost = postId => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch(`/admin/post/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    }).then(response => {
      console.log(response.status);
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
    case SET_POST_CATEGORY_ID:
      return applySetPostCategoryId(state, action);
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

const applySetPostCategoryId = (state, action) => {
  const { categoryId } = action;
  return {
    ...state,
    categoryId,
  };
};

// exports
const actionCreators = {
  getPosts,
  getPostDetail,
  setPostCategoryId,
  addPost,
  removePost,
};

export { actionCreators };

// reducer exports
export default reducer;
