"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants');

let _user = { answers: [], questions: [] };

const UserStore = new Store(AppDispatcher);

function _setUser (user) {
  _user = user;
}

UserStore.user = function () {
  return Object.assign({}, _user);
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_USER:
      _setUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
