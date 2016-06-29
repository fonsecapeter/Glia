"use strict";

const SessionApiUtil = {
  signIn (user, success, error) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      data: { user: user },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error('sign_in', errors);
      }
    });
  },

  signOut (success) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success,
      error () {
        console.log('Logout error in SessionApiUtil#logout');
      }
    });
  },

  signUp (user, success, error) {
    $.ajax({
      url: 'api/user',
      type: 'POST',
      data: { user: user },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('sign_up', errors);
      }
    });
  },

  fetchCurrentUser (success, complete) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      success,
      error (xhr) {
        console.log('Error in SessionApiUtil#fetchCurrentUser');
      },
      complete
    });
  }
};

module.exports = SessionApiUtil;
