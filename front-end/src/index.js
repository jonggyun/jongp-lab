import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from 'redux/configureStore';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from 'components/App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
