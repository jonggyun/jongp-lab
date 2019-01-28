// imports

// actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOG_OUT = 'LOG_OUT';
const GET_ABOUT = 'GET_ABOUT';

// action creators
const saveToken = (token, id) => {
  return {
    type: SAVE_TOKEN,
    token,
    id,
  };
};

const logout = () => {
  return {
    type: LOG_OUT,
  };
};

const getAbout = about => {
  return {
    type: GET_ABOUT,
    about,
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
        dispatch(saveToken(json.token, json.id));
      });
  };
};

const getAdminAbout = () => {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch('/admin/about', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
          return;
        }
        return response.json();
      })
      .then(json => {
        dispatch(getAbout(json));
      });
  };
};

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem('jwt') ? true : false,
  token: localStorage.getItem('jwt'),
  about: '',
  id: '',
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOG_OUT:
      return applyLogout(state, action);
    case GET_ABOUT:
      return applyGetAbout(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetToken = (state, action) => {
  const { token, id } = action;

  localStorage.setItem('jwt', token);

  return {
    ...state,
    isLoggedIn: true,
    token,
    id,
  };
};

const applyLogout = (state, action) => {
  localStorage.removeItem('jwt');
  return {
    isLoggedIn: false,
  };
};

const applyGetAbout = (state, action) => {
  const { about } = action;
  return {
    ...state,
    about,
  };
};

// exports

const actionCreators = {
  usernameLogin,
  logout,
  getAdminAbout,
};

export { actionCreators };

// reducer exports
export default reducer;
