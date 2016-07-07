"use strict";

const TopicApiUtil = {
  fetchAllTopics (success) {
    $.ajax({
      url: '/api/topics',
      type: 'GET',
      success
    });
  }
};

module.exports = TopicApiUtil;
