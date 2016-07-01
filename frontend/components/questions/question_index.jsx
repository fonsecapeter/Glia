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
      <div className="question-index">
        <div className="topic-list">
          <div className="topic-list-content">
            <h3>Topics</h3>
          </div>
        </div>
        <div className="feed">
          <h3>Top Questions For You</h3>
          {
            this.state.questions.map( question => {
              return (
                <QuestionIndexItem question={ question } key={ question.id }/>
              );
            })
          }
        </div>
        <div className="help-box">
          <div className="help-box-content">
            <h3>Help</h3>            
          </div>
        </div>
      </div>
    );
  }
});

module.exports = QuestionIndex;