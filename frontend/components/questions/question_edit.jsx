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
    const candidateQuestion = QuestionStore.find(this.props.questionId);
    const question = candidateQuestion ? candidateQuestion : {};
    this.setState({
      title: question.title,
      description: question.description
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestion(this.props.params.questionId);
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  _onSubmit (event) {
    event.preventDefault();
    QuestionActions.updatePost(this.state);
    hashHistory.push(`questions/${this.props.params.questionId}`);
  },

  _onTitleChange (event) {
    this.setState({ title: event.currentTarget.value });
  },

  _onBodyChange (event) {
    this.setState({ body: event.currentTarget.value });
  },

  render () {
    return (
      <div className="question-edit">
        <div className="question-col">
          <form onSubmit={ this._onSubmit }>
            <input
              onChange={ this._onTitleChange }
              value={ this.state.title } />
            <br />
            <textarea
              onChange={ this._onBodyChange }
              value={ this.state.body }></textarea>
            <br />
            <input className="button" value="save" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = QuestionEdit;
