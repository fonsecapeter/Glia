const React = require('react');

const NewCommentForm = React.createClass({
  getInitialState () {
    return ({
      content: ''
    });
  },

  _onContentChange (event) {
    this.setState({ content: event.currentTarget.value });
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
