"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TopicConstants = require('../constants/topic_constants');
const TopicApiUtil = require('../util/topic_api_util');
const ErrorActions = require('./error_actions');

const TopicActions = {
  // client
  fetchAllTopics () {
    TopicApiUtil.fetchAllTopics(
      TopicActions.receiveAllTopics
    );
  },

  // server
  receiveAllTopics (data) {
    AppDispatcher.dispatch({
      actionType: TopicConstants.RECEIVE_TOPICS,
      topics: data
    });
  }
};

module.exports = TopicActions;
