// imports

// actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOG_OUT = 'LOG_OUT';

// action creators
const saveToken = token => {
  return {
    type: SAVE_TOKEN,
    token,
  };
};

const logout = () => {
  return {
    type: LOG_OUT,
  };
};

// api actions
const usernameLogin = (id, password) => {
  return dispatch => {
    fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        const { isLoggedIn } = json;
        if (!isLoggedIn) {
          alert('일치하는 정보가 없습니다');
          return;
        }

        dispatch(saveToken(json.token));
      });
  };
};

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem('jwt') ? true : false,
  token: localStorage.getItem('jwt'),
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOG_OUT:
      return applyLogout(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetToken = (state, action) => {
  const { token } = action;

  localStorage.setItem('jwt', token);

  return {
    ...state,
    isLoggedIn: true,
    token,
  };
};

const applyLogout = (state, action) => {
  localStorage.removeItem('jwt');
  return {
    isLoggedIn: false,
  };
};

// exports

const actionCreators = {
  usernameLogin,
  logout,
};

export { actionCreators };

// reducer exports
export default reducer;
