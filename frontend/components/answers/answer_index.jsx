const React = require('react');
const AnswerIndexItem = require('./answer_index_item');

const AnswerIndex = React.createClass({
  render () {
    return (
      <div className="AnswerIndex">
        {
          this.props.answers.map( answer => {
            return (
              <AnswerIndexItem
                answer={ answer }
                key={ answer.id } />
            );
          })
        }
      </div>
    );
  }
});

module.exports = AnswerIndex;
