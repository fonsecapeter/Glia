"use strict";

const AnswerApiUtil = {
  createAnswer (answer, success, error) {
    $.ajax({
      url: `/api/questions/${ answer.questionId }/answers`,
      type: 'POST',
      data: { answer: answer },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('create', errors);
      }
    });
  },

  updateAnswer (answer, success, error) {
    $.ajax({
      url: `/api/questions/${ answer.questionId }/answers/${ answer.id }`,
      type: 'PATCH',
      data: { answer: answer },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('create', errors);
      }
    });
  },

  destroyAnswer (answerData, success) {
    $.ajax({
      url: `/api/questions/${ answerData.questionId }/answers/${ answerData.answerId }`,
      type: 'DELETE',
      success
    });
  }
};

module.exports = AnswerApiUtil;
