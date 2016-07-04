const React = require('react');
const AnswerActions = require('../../actions/answer_actions');
const hashHistory = require('react-router').hashHistory;

const AnswerCreateForm = React.createClass({
  getInitialState () {
    return ({
      content: '',
    });
  },

  _onContentChange (event) {
    this.setState({ content: event.currentTarget.value });
  },

  _onSubmit (event) {
    event.preventDefault();

    AnswerActions.createAnswer({
      content: this.state.content,
      questionId: this.props.questionId
    });

    this.setState({ content: '' });
  },

  render () {
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
          <input type="submit" className="button" value="answer" />
        </form>
      </div>
    );
  }
});

module.exports = AnswerCreateForm;
