const React = require('react');
const CommentActions = require('../../actions/comment_actions');

const NewCommentForm = React.createClass({
  getInitialState () {
    return ({
      content: ''
    });
  },

  _onContentChange (event) {
    this.setState({ content: event.currentTarget.value });
  },

  _onSubmit (event) {
    event.preventDefault();
    const comment = {
      content: this.state.content,
      commentable_type: this.props.commentableType,
      commentable_id: parseInt(this.props.commentableId)
    };

    CommentActions.createComment(comment);
    this.setState({ content: '' });
  },

  render () {
    return (
      <form onSubmit={ this._onSubmit }>
        <input
          className="comment-input"
          type="text"
          onChange={ this._onContentChange }
          value={ this.state.content } />
        <input type="submit" className="button comment-submit" value="comment" />
      </form>
    );
  }
});

module.exports = NewCommentForm;
