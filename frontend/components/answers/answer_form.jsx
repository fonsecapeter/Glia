const React = require('react');
const AnswerActions = require('../../actions/answer_actions');
const hashHistory = require('react-router').hashHistory;

const AnswerCreateForm = React.createClass({
  getInitialState () {
    if (this.props.method === 'create') {
      return ({
        content: '',
      });
    } else if (this.props.method === 'edit') {
      return ({
        content: this.props.content
      });
    }
  },

  _onContentChange (event) {
    this.setState({ content: event.currentTarget.value });
  },

  _onSubmit (event) {
    event.preventDefault();

    const answer = {
      content: this.state.content,
      questionId: this.props.questionId
    };

    if (this.props.method === 'create') {
      AnswerActions.createAnswer(answer);
    } else if (this.props.method === 'edit') {
      answer.id = this.props.answerId;
      AnswerActions.updateAnswer(answer);
    }

    this.setState({ content: '' });
    this.props.closeSelf();
  },

  render () {
    let buttonText;
    if (this.props.method === 'create') {
      buttonText = 'answer';
    } else if (this.props.method === 'edit') {
      buttonText = 'edit';
    }

    return (
      <div>
        <form onSubmit={ this._onSubmit }>
          <textarea
            className="answer-form-input"
            type="text"
            onChange={ this._onContentChange }
            value={ this.state.content }
            rows={ 6 }></textarea>

          <br /><br />
          <input type="submit" className="button" value={ buttonText } />
        </form>
      </div>
    );
  }
});

module.exports = AnswerCreateForm;
