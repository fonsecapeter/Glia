const React = require('react');

const QuestionIndexItem = React.createClass({
  render () {
    return (
      <div className="question-index-item">
        <p>{this.props.question.title}</p>
        <p>{this.props.question.author_id}</p>
      </div>
    );
  }
});

module.exports = QuestionIndexItem;
