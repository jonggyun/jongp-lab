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

const addPost = ({
  title,
  category,
  content,
  isPublic,
  tags,
  subtitle,
  thumbnail,
}) => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('isPublic', isPublic);
    fd.append('tags', tags);
    fd.append('subtitle', subtitle);
    fd.append('thumbnail', thumbnail);
    fetch('/admin/post', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: fd,
    }).then(response => {
      if (response.status === 200) {
        console.log('success');
      }
    });
  };
};

const modifyPost = ({
  title,
  category,
  content,
  isPublic,
  tags,
  subtitle,
  postId,
  thumbnail,
}) => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('public', isPublic);
    fd.append('tags', tags);
    fd.append('thumbnail', thumbnail);
    fetch(`/admin/post/${postId}`, {
      method: 'PUT',
      headers: {
        Authorization: token,
      },
      body: fd,
    }).then(response => {
      if (response.status === 200) {
        console.log('수정완료');
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
  modifyPost,
  removePost,
  setPostDetail,
};

export { actionCreators };

// reducer exports
export default reducer;
