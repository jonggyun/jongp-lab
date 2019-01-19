// imports
import { actionCreators as userActions } from 'redux/modules/user';
// actions
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CLICK_MODAL = 'SET_CLICK_MODAL';

// action creators
const setCategory = categories => {
  return {
    type: SET_CATEGORY,
    categories,
  };
};

const setClickModal = clickModal => {
  return {
    type: SET_CLICK_MODAL,
    clickModal,
  };
};

// api actions
const getCategory = () => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch('/admin/category', {
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
        dispatch(setCategory(json));
      });
  };
};

const createCategory = (id, name, isPublic) => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch('/admin/category', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        public: isPublic,
      }),
    }).then(response => {
      if (response.status === 200) {
        alert('저장되었습니다.');
        dispatch(setClickModal(false));
        dispatch(getCategory());
      } else {
        alert('오류가 발생했습니다.');
      }
    });
  };
};

// initial state
const initialState = {
  clickModal: false,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return applySetCategory(state, action);
    case SET_CLICK_MODAL:
      return applySetClickModal(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetCategory = (state, action) => {
  const { categories } = action;
  return {
    ...state,
    categories,
  };
};

const applySetClickModal = (state, action) => {
  const { clickModal } = action;
  return {
    ...state,
    clickModal,
  };
};

// exports

const actionCreators = {
  getCategory,
  createCategory,
  setClickModal,
};

export { actionCreators };

// reducer exports
export default reducer;
