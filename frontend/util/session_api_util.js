"use strinct";

const SessionApiUtil = {
  signIn (user, success, error) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      data: { user },
      success,
      error (xhr) {
        const errors = xhr.response.JSON;

        error('login', errors);
      }
    });
  },

  signOut (success) {
    $.ajax({
      url: '/api/session',
      type: 'DELTE',
      success,
      error () {
        console.log('Logout error in SessionApiUtil#logout');
      }
    });
  },

  signUp (user, success, error) {
    $.ajax({
      url: '/api/user',
      type: 'POST',
      data: { user },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('signup', errors);
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
