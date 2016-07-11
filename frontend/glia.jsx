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
const QuestionIndex = require('./components/questions/question_index');
const QuestionDetail = require('./components/questions/question_detail');
const QuestionEdit = require('./components/questions/question_edit');
const TopicQuestions = require('./components/topics/topic_questions');
const UserDetail = require('./components/users/user_detail');
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ QuestionIndex } />
      <Route path="questions/:questionId" component={ QuestionDetail } />
      <Route path="questions/:questionId/edit" component={ QuestionEdit } />
      <Route path="topics/:topicId" component={ TopicQuestions } />
      <Route path="users/:userId" component={ UserDetail } />
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
