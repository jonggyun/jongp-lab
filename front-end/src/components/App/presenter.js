import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import PropTypes from 'prop-types';

import AdminLogin from 'components/AdminLogin';
import AdminMain from 'components/AdminMain';
import AdminAbout from 'components/AdminAbout';
import AdminCategory from 'components/AdminCategory';
import AdminPost from 'components/AdminPost';

const App = props => {
  return [
    props.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={1} />,
  ];
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoutes = props => {
  return (
    <React.Fragment>
      <Route exact path="/admin" component={AdminMain} />
      <Route path="/admin/about" component={AdminAbout} />
      <Route path="/admin/category" component={AdminCategory} />
      <Route path="/admin/post" component={AdminPost} />
    </React.Fragment>
  );
};

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => 'main page!!'} />
    <Route exact path="/admin" component={AdminLogin} />
  </Switch>
);

export default App;
