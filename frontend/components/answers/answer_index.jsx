const React = require('react');
const AnswerIndexItem = require('./answer_index_item');

const AnswerIndex = React.createClass({
  render () {
    let answerCount = this.props.answers.length;
    let answerHead = "";

    if (answerCount === 1) {
      answerHead = `${ answerCount } Answer`;
    } else {
      answerHead = `${ answerCount } Answers`;
    }

    return (
      <div className="answer-index">
        <h4>{ answerHead }</h4>
        {
          this.props.answers.map( answer => {
            return (
              <AnswerIndexItem
                answer={ answer }
                questionId={ this.props.questionId }
                key={ answer.id } />
            );
          }).reverse()
        }
      </div>
    );
  }
});

module.exports = AnswerIndex;
