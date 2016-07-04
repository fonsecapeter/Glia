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
      type: 'POST',
      data: { question: question },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('create', errors);
      }
    });
  },

  fetchQuestion (questionId, success) {
    $.ajax({
      url: `/api/questions/${ questionId } `,
      type: 'GET',
      success
    });
  },

  updateQuestion (question, success, error) {
    $.ajax({
      url: `/api/questions/${ question.id }`,
      type: 'PATCH',
      data: { question: question },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('update', errors);
      }
    });
  },

  destroyQuestion (questionId, success) {
    $.ajax({
      url: `/api/questions/${ questionId }`,
      type: 'DELETE',
      success
    });
  }
};

module.exports = QuestionApiUtil;
