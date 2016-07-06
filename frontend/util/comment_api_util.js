"use strict";

const CommentApiUtil = {
  createComment (comment, success, error) {
    $.ajax({
      url: '/api/comments',
      type: 'POST',
      data: { comment: comment },
      success,
      error (xhr) {
        const errors = xhr.responseJSON;
        error('creare', errors);
      }
    });
  },

  destroyComment (comment, success) {
    $.ajax({
      url: `/api/comments/${ comment.id }`,
      type: 'DELETE',
      success
    });
  }
};
module.exports = CommentApiUtil;
