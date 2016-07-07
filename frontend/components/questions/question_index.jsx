const React = require('react');
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item');
const TopicIndex = require('../topics/topic_list');
const Help = require('../help.jsx');

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
      <div className="question-index">
        <TopicIndex />
        <div className="feed">
          <h4>Top Questions For You</h4>
          {
            this.state.questions.map( question => {
              return (
                <QuestionIndexItem question={ question } key={ question.id }/>
              );
            }).reverse()
          }
        </div>
        <div className="help-box">
          <Help />
        </div>
      </div>
    );
  }
});

module.exports = QuestionIndex;
