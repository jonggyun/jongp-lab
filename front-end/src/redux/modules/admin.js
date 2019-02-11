// imports

// actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOG_OUT = 'LOG_OUT';
const GET_ABOUT = 'GET_ABOUT';
const SET_ABOUT = 'SET_ABOUT';

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

const getAbout = about => {
  return {
    type: GET_ABOUT,
    about,
  };
};

const setAbout = about => {
  return {
    type: SET_ABOUT,
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

const saveAdminAbout = () => {
  return (dispatch, getState) => {
    const {
      user: { token, about },
    } = getState();
    fetch('/admin/about', {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        about,
      }),
    }).then(response => {
      if (response.status === 200) {
        alert('저장하였습니다.');
      }
    });
  };
};

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem('jwt') ? true : false,
  token: localStorage.getItem('jwt'),
  about: '',
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
    case SET_ABOUT:
      return applySetAbout(state, action);
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

const applyGetAbout = (state, action) => {
  const { about } = action;
  return {
    ...state,
    about,
  };
};

const applySetAbout = (state, action) => {
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
  setAbout,
  saveAdminAbout,
};

export { actionCreators };

// reducer exports
export default reducer;
