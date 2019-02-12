// imports

// actions
const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';
// action creators
const setUserCategories = categories => {
  return {
    type: SET_USER_CATEGORIES,
    categories,
  };
};

// api actions
const getCategories = () => {
  return dispatch => {
    fetch('/category', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => dispatch(setUserCategories(json)));
  };
};

// initial state
const initialState = {};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CATEGORIES:
      return applySetCategories(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetCategories = (state, action) => {
  const { categories } = action;
  return {
    ...state,
    categories,
  };
};

// exports
const actionCreators = {
  getCategories,
};

export { actionCreators };
// reducer exports
export default reducer;
