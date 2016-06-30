"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const QuestionConstants = require('../constants/question_constants');

let _questions = {};

const QuestionStore = new  Store(AppDispatcher);

function _resetQuestions (questions) {
  // _questions = {};
  // questions.forEach( question => {
  //   _questions[question.id] = question;
  // });
  _questions = questions;
}

function _addQuestion (question) {
  _questions[question.id] = question;
}

function _removeQuestion (questionId) {
  delete _questions[questionId];
}

QuestionStore.all = function () {
  return Object.keys(_questions).map( key => {
    return _questions[key];
  });
};

QuestionStore.find = function (questionId) {
  return _questions[questionId];
};

QuestionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case QuestionConstants.RECEIVE_QUESTIONS:
      _resetQuestions(payload.questions);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.RECEIVE_QUESTION:
      _addQuestion(payload.question);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.REMOVE_QUESTION:
      _removeQuestion(payload.question.id);
      QuestionStore.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
