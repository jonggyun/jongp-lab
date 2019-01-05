import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'redux/modules/user';

// node의 process를 이용하면 현재 개발인지 운영인지 확인할 수 있다.
const env = process.env.NODE_ENV;

const middlewares = [thunk];

// 개발환경일 경우 redux-logger를 사용
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = () =>
  combineReducers({
    user,
  });

// 스토어 생성할 때 initialState를 넣었었나????
// ex) const arr = [1,2,3]
// ...arr로 넣으면 1,2,3 하고 각자 들어간다. vs arr로 넣으면 [1,2,3]으로 들어감
let store;
if (env === 'development') {
  store = initialState =>
    createStore(
      reducer(),
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState =>
    createStore(reducer(), compose(applyMiddleware(...middlewares)));
}
export default store();
