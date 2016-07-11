"use strict";

const UserApiUtil = {
  fetchUserById (userId, success, complete) {
    $.ajax({
      url: `/api/users/${ userId }`,
      type: 'GET',
      success,
      error (xhr) {
        console.log('Error in UserApiUtil#fetchUserById');
        console.log(xhr);
      },
      complete
    });
  }
};

module.exports = UserApiUtil;
