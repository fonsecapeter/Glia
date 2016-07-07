"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const TopicConstants = require('../constants/topic_constants');

let _topics = {};

const TopicStore = new  Store(AppDispatcher);

function _resetTopics (topics) {
  _topics = topics;
}

function _addTopic (topic) {
  _topics[topic.id] = topic;
}

function _removeTopic (topicId) {
  delete _topics[topicId];
}

TopicStore.all = function () {
  return Object.keys(_topics).map( key =>{
    return _topics[key];
  });
};

TopicStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TopicConstants.RECEIVE_TOPICS:
      _resetTopics(payload.topics);
      TopicStore.__emitChange();
      break;
    case TopicConstants.RECEIVE_TOPIC:
      _addTopic(payload.topic);
      TopicStore.__emitChange();
      break;
    case TopicConstants.REMOVE_TOPIC:
      _removeTopic(payload.topic.id);
      TopicStore.__emitChange();
      break;
  }
};

module.exports = TopicStore;
