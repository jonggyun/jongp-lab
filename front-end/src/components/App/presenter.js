import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import PropTypes from 'prop-types';

import UserPost from 'components/UserPost';
import UserPostDetail from 'components/UserPostDetail';
import UserAbout from 'components/UserAbout';

import AdminLogin from 'components/AdminLogin';
import AdminMain from 'components/AdminMain';
import AdminAbout from 'components/AdminAbout';
import AdminCategory from 'components/AdminCategory';
import AdminPost from 'components/AdminPost';
import AdminPostDetail from 'components/AdminPostDetail';
import AdminPostEditor from 'components/AdminPostEditor';

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
      <Route exact path="/" component={UserPost} />
      <Route exact path="/admin" component={AdminMain} />
      <Route path="/admin/about" component={AdminAbout} />
      <Route path="/admin/category" component={AdminCategory} />
      <Route exact path="/admin/post" component={AdminPost} />
      <Route exact path="/admin/editor" component={AdminPostEditor} />
      <Route path="/admin/editor/:postId" component={AdminPostEditor} />
      <Route path="/admin/post/:postId" component={AdminPostDetail} />
    </React.Fragment>
  );
};

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={UserPost} />
    <Route exact path="/about" component={UserAbout} />
    <Route path="/post/:postId" component={UserPostDetail} />
    <Route exact path="/admin" component={AdminLogin} />
  </Switch>
);

export default App;
