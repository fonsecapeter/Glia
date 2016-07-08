"use strict";

const TopicApiUtil = {
  fetchAllTopics (success) {
    $.ajax({
      url: '/api/topics',
      type: 'GET',
      success
    });
  },

  createTopic (topic, success, error) {
    $.ajax({
      url: '/api/topics',
      type: 'POST',
      data: topic,
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('create', errors);
      }
    });
  }
};

module.exports = TopicApiUtil;
