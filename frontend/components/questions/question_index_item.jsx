const React = require('react');

const QuestionIndexItem = React.createClass({
  render () {
    return (
      <p>{this.props.question.title}</p>
    );
  }
});

module.exports = QuestionIndexItem;
