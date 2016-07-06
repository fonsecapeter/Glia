"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const CommentApiUtil = require('../util/comment_api_util');
const ErrorActions = require('./error_actions');
const QuestionActions = require('./question_actions');

const CommentActions = {
  // client
  createComment (comment) {
    CommentApiUtil.createComment(
      comment,
      QuestionActions.receiveQuestionAndUser,
      ErrorActions.setErrors
    );
  },

  destroyComment (comment) {
    CommentApiUtil.destroyComment(
      comment,
      QuestionActions.receiveQuestionAndUser
    );
  }
};

module.exports = CommentActions;
