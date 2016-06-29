"use strict";

const QuestionApiUtil = {
  fetchAllQuestions (success) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      success
    });
  },

  createQuestion (question, success, error) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('create', errors);
      }
    });
  },

  fetchQuestion (questionId, success) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      success
    });
  },

  updateQuestion (question, success, error) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('update', errors);
      }
    });
  },

  destroyQuestion (questionId, success) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      success
    });
  },

};

module.exports = QuestionApiUtil;
