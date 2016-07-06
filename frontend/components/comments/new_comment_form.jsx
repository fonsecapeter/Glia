const React = require('react');

const NewCommentForm = React.createClass({
  render () {
    return (
      <form onSubmit={ this._onSubmit }>

      </form>
      <p>new comment form</p>
    );
  }
});

module.exports = NewCommentForm;
