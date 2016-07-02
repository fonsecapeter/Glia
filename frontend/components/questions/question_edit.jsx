const React = require('react');
const hashHistory = require('react-router').hashHistory;
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');

const QuestionEdit = React.createClass({
  getInitialState () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {};

    return ({
      title: question.title,
      desription: question.desription
    });
  },

  _onChange () {
    const candidateQuestion = QuestionStore.find(this.props.params.questionId);
    const question = candidateQuestion ? candidateQuestion : {};
    this.setState({
      title: question.title,
      description: question.description
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestion(parseInt(this.props.params.questionId));
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  _onSubmit (event) {
    event.preventDefault();
    QuestionActions.updateQuestion({
      title: this.state.title,
      description: this.state.description,
      id: this.props.params.questionId
    });
    hashHistory.push(`questions/${this.props.params.questionId}`);
  },

  _onTitleChange (event) {
    this.setState({ title: event.currentTarget.value });
  },

  _onDescriptionChange (event) {
    this.setState({ description: event.currentTarget.value });
  },

  render () {
    return (
      <div className="question-edit">
        <div className="question-col">
          <h3>Edit Question</h3>

          <form onSubmit={ this._onSubmit }>
            <input
              type="text"
              onChange={ this._onTitleChange }
              value={ this.state.title } />

            <br /><br />
            <textarea
              onChange={ this._onDescriptionChange }
              value={ this.state.description }></textarea>

            <br /><br />
            <input type="submit" className="button" value="save" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = QuestionEdit;
