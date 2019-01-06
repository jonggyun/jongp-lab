import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'; // 찾아보기
import createHistory from 'history/createBrowserHistory'; // 찾아보기
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'redux/modules/user';
import category from 'redux/modules/category';

// node의 process를 이용하면 현재 개발인지 운영인지 확인할 수 있다.
const env = process.env.NODE_ENV;

// history를 redux로 관리하려는 듯??
const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

// 개발환경일 경우 redux-logger를 사용
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = () =>
  combineReducers({
    user,
    category,
    router: connectRouter(history),
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

export { history };
export default store();
