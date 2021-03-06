// imports
import { actionCreators as adminActions } from 'redux/modules/admin';
// actions
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CLICK_MODAL = 'SET_CLICK_MODAL';
const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
const SET_CATEGORY_DETAIL = 'SET_CATEGORY_DETAIL';

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

const selectedCategory = id => {
  return {
    type: SELECTED_CATEGORY,
    id,
  };
};

const setCategoryDetail = detail => {
  return {
    type: SET_CATEGORY_DETAIL,
    detail,
  };
};

// api actions
const getCategory = () => {
  return (dispatch, getState) => {
    const {
      admin: { token },
    } = getState();
    fetch('/admin/category', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(adminActions.logout());
          return;
        }
        return response.json();
      })
      .then(json => {
        dispatch(setCategory(json));
      });
  };
};

const getCategoryDetail = _id => {
  return (dispatch, getState) => {
    fetch(`/admin/category/${_id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(setCategoryDetail(json));
      });
  };
};

const createCategory = (id, name, isPublic) => {
  return (dispatch, getState) => {
    const {
      admin: { token },
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

const deleteCategory = id => {
  return (dispatch, getState) => {
    const {
      admin: { token },
    } = getState();
    fetch('/admin/category', {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    }).then(response => {
      if (response.status === 200) {
        dispatch(setClickModal(false));
        dispatch(getCategory());
      }
    });
  };
};

const modifyCategory = (_id, id, name, isPublic) => {
  return (dispatch, getState) => {
    const {
      admin: { token },
    } = getState();
    fetch('/admin/category', {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
        id,
        name,
        isPublic,
      }),
    }).then(response => {
      if (response.status === 202) {
        dispatch(setClickModal(false));
        dispatch(getCategory());
      }
    });
  };
};

// initial state
const initialState = {
  clickModal: false,
  id: '',
  name: '',
  detail: '',
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return applySetCategory(state, action);
    case SET_CLICK_MODAL:
      return applySetClickModal(state, action);
    case SELECTED_CATEGORY:
      return applySelectedCategory(state, action);
    case SET_CATEGORY_DETAIL:
      return applySetCategoryDetail(state, action);
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

const applySelectedCategory = (state, action) => {
  const { id } = action;
  return {
    ...state,
    id,
  };
};

const applySetCategoryDetail = (state, action) => {
  const { detail } = action;
  return {
    ...state,
    detail,
  };
};

// exports

const actionCreators = {
  getCategory,
  createCategory,
  setClickModal,
  selectedCategory,
  deleteCategory,
  getCategoryDetail,
  modifyCategory,
};

export { actionCreators };

// reducer exports
export default reducer;
