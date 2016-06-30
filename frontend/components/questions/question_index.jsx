const React = require('react');
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item');

const QuestionIndex = React.createClass({
  getInitialState () {
    return ({
      questions: []
    });
  },

  _onChange () {
    this.setState({
      questions: QuestionStore.all()
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchAllQuestions();
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  render () {
    return (
      <div>
        {
          this.state.questions.map( question => {
            return (
              <QuestionIndexItem question={ question } key={ question.id }/>
            );
          })
        }
      </div>
    );
  }
});

module.exports = QuestionIndex;
