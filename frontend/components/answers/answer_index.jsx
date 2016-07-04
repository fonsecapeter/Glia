const React = require('react');
const AnswerIndexItem = require('./answer_index_item');

const AnswerIndex = React.createClass({
  render () {
    return (
      <div className="answer-index">
        <h4>{ this.props.answers.length } Answers</h4>
        {
          this.props.answers.map( answer => {
            return (
              <AnswerIndexItem
                answer={ answer }
                key={ answer.id } />
            );
          }).reverse()
        }
      </div>
    );
  }
});

module.exports = AnswerIndex;
