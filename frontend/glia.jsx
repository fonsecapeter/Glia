"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app');
const SignInForm = require('./components/sign_in_form');
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="sign_up" component={ SignInForm } />
      <Route path="sign_in" component={ SignInForm } />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  // redirect users who are not signed in
  if (!SessionStore.isUserLoggedIn()) {
    replace('/sign_in');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
