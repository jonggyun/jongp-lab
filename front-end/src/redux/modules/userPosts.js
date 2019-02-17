// imports

// actions
const SET_USER_POSTS = 'SET_USER_POSTS';
const SET_USER_POST_DETAIL = 'SET_USER_POST_DETAIL';
const SET_USER_MORE_POSTS = 'SET_USER_MORE_POSTS';

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

const setUserMorePosts = ({ posts, isLast }) => {
  return {
    type: SET_USER_MORE_POSTS,
    posts,
    isLast,
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
        dispatch(setUserPostDetail(json));
      });
  };
};

const getOldPosts = (lastPostId, selectedCategoryId) => {
  return dispatch => {
    fetch(
      selectedCategoryId === 'all'
        ? `/post/old/${lastPostId}`
        : `/post/old/${lastPostId}/${selectedCategoryId}`,
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(json => dispatch(setUserMorePosts(json)));
  };
};

const getCategoryPosts = categoryId => {
  return dispatch => {
    fetch(`/category/${categoryId}`, {
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
    case SET_USER_POST_DETAIL:
      return applySetUserPostDetail(state, action);
    case SET_USER_MORE_POSTS:
      return applySetUserMorePosts(state, action);
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

const applySetUserMorePosts = (state, action) => {
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
  getCategoryPosts,
  getPostDetail,
  getOldPosts,
  setUserPosts,
};

export { actionCreators };
// reducer exports
export default reducer;
