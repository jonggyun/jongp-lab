// imports

// actions
const SET_USER_ABOUT = 'SET_USER_ABOUT';

// action creators
const setUserAbout = about => {
  return {
    type: SET_USER_ABOUT,
    about,
  };
};

// api actions
const getUserAbout = () => {
  return dispatch => {
    fetch('/about', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => dispatch(setUserAbout(json)));
  };
};

// initial state
const initialState = {
  about: '',
};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ABOUT:
      return applySetUserAbout(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetUserAbout = (state, action) => {
  const { about } = action;
  return {
    ...state,
    about,
  };
};

// exports
const actionCreators = {
  getUserAbout,
};
export { actionCreators };

// reducer exports
export default reducer;
