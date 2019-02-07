// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions
const SET_POSTS = 'SET_POSTS';
const SET_POST_DETAIL = 'SET_POST_DETAIL';
const SET_POST_CATEGORY_ID = 'SET_POST_CATEGORY_ID';
const SET_MORE_POSTS = 'SET_MORE_POSTS';

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

const setMorePosts = ({ posts, isLast }) => {
  return {
    type: SET_MORE_POSTS,
    posts,
    isLast,
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

const getOldPosts = lastPostId => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch(`/admin/post/old/${lastPostId}`, {
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
        dispatch(setMorePosts(json));
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
const initialState = {
  isLast: false,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return applySetPosts(state, action);
    case SET_POST_DETAIL:
      return applySetPostDetail(state, action);
    case SET_POST_CATEGORY_ID:
      return applySetPostCategoryId(state, action);
    case SET_MORE_POSTS:
      return applySetMorePosts(state, action);
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

const applySetMorePosts = (state, action) => {
  const { posts, isLast } = action;
  return {
    ...state,
    posts: state.posts.concat(posts),
    isLast,
  };
};

// exports
const actionCreators = {
  getPosts,
  getOldPosts,
  setPosts,
  getPostDetail,
  setPostCategoryId,
  addPost,
  modifyPost,
  removePost,
  setPostDetail,
  setMorePosts,
};

export { actionCreators };

// reducer exports
export default reducer;
