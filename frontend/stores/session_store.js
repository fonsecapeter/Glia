"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

let _currentUser = { answers: [], questions: [] };
let _currentUserHasBeenFetched = false;

const SessionStore = new Store(AppDispatcher);

const _signIn = function (currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

const _signOut = function () {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

SessionStore.currentUser = function () {
  // protect _currentUser
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserSignedIn = function () {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.SIGNIN:
      _signIn(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.SIGNOUT:
      _signOut();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
