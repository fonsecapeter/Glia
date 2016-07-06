"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const AnswerApiUtil = require('../util/answer_api_util');
const ErrorActions = require('./error_actions');
const QuestionActions = require('./question_actions');

const AnswerActions = {
  // client
  createAnswer (answer) {
    AnswerApiUtil.createAnswer(
      answer,
      QuestionActions.receiveQuestionAndUser,
      ErrorActions.setErrors
    );
  },

  updateAnswer (answer) {
    AnswerApiUtil.updateAnswer(
      answer,
      QuestionActions.receiveQuestionAndUser,
      ErrorActions.setErrors
    );
  },

  destroyAnswer (answer) {
    AnswerApiUtil.destroyAnswer(
      answer,
      QuestionActions.receiveQuestionAndUser
    );
  }
};

module.exports = AnswerActions;
