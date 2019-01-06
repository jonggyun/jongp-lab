// imports
import { actionCreators as userActions } from 'redux/modules/user';
// actions
const SET_CATEGORY = 'SET_CATEGORY';

// action creators
const setCategory = list => {
  return {
    type: SET_CATEGORY,
    list,
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

// initial state
const initialState = {};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return applySetCategory(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetCategory = (state, action) => {
  const { list } = action;
  return {
    ...state,
    list,
  };
};
// exports

const actionCreators = {
  getCategory,
};

export { actionCreators };

// reducer exports
export default reducer;
