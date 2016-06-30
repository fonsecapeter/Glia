"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const QuestionConstants = require('../constants/question_constants');
const QuestionApiUtil = require('../util/question_api_util');
const ErrorActions = require('./error_actions');

const QuestionActions = {
  // client
  fetchAllQuestions () {
    QuestionApiUtil.fetchAllQuestions(
      QuestionActions.receiveAllQuestions
    );
  },

  createQuestion (question) {
    QuestionApiUtil.createQuestion(
      question,
      QuestionActions.receiveQuestion,
      ErrorActions.setErrors
    );
  },

  fetchQuestion (questionId) {
    QuestionApiUtil.fetchQuestion(
      questionId,
      QuestionActions.receiveQuestion
    );
  },

  updateQuestion (question) {
    QuestionApiUtil.updateQuestion(
      question,
      QuestionActions.receiveQuestion,
      ErrorActions.setErrors
    );
  },

  destroyQuestion (questionId) {
    QuestionApiUtil.destroyQuestion(
      questionId,
      QuestionActions.removeQuestion
    );
  },

  // server
  receiveAllQuestions (data) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.RECEIVE_QUESTIONS,
      questions: data
    });
  },

  receiveQuestion (data) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.RECEIVE_QUESTION,
      question: data
    });
  },

  removeQuestion (data) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.REMOVE_QUESTION,
      question: data
    });
  }
};

module.exports = QuestionActions;
