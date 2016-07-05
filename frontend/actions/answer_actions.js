"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const AnswerApiUtil = require('../util/answer_api_util');
const AnswerConstants = require('../constants/answer_constants');
const ErrorActions = require('./error_actions');
const QuestionActions = require('./question_actions');

const AnswerActions = {
  // client
  createAnswer (answer) {
    AnswerApiUtil.createAnswer(
      answer,
      // QuestionActions.receiveQuestion,
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
  },

  // server
  // receiveQuestionAndUser (data) {
  //   SessionActions.receiveCurrentUser (data.user);
  //   QuestionActions.receiveQuestion (data.question);
  // }
};

module.exports = AnswerActions;
