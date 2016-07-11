"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const UserApiUtil = require('../util/user_api_util');

const UserActions = {
  // client
  fetchUserById (userId, complete) {
    UserApiUtil.fetchUserById(
      userId,
      UserActions.receiveUser,
      complete
    );
  },

  // server
  receiveUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    });
  }
};

module.exports = UserActions;
