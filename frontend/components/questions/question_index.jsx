const React = require('react');
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');

const QuestionIndex = React.createClass({
  getInitialState () {
    return ({
      questions: []
    });
  },

  componentDidMount () {

  },

  render () {
    return (
      <p>hello from question index</p>
    );
  }
});

module.exports = QuestionIndex;
