import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import PropTypes from 'prop-types';

import Admin from 'components/Admin';
import AdminAbout from 'components/AdminAbout';

const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={2} />,
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/admin" component={AdminAbout} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => 'main page!!'} />
    <Route exact path="/admin" component={Admin} />
  </Switch>
);

export default App;
