const React = require('react');
const hashHistory = require('react-router').hashHistory;
const QuestionStore = require('../../stores/question_store.js');
const QuestionActions = require('../../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item');
const AnswerForm = require('../answers/answer_form');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const imagePublicId = 'user_j20bee';

const AnswerIndex = require('../answers/answer_index');

const QuestionDetail = React.createClass({
  getInitialState () {
    return ({
      question: {},
      answering: false
    });
  },

  _onChange () {
    this.setState({
      question: QuestionStore.find(this.props.params.questionId)
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    QuestionActions.fetchQuestion(this.props.params.questionId);
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  createdAgo () {
    let createdAgo = this.state.question.createdAgo;

    return (
      <span className='light-text'>
        , { createdAgo } ago
      </span>
    );
  },

  linkToEditPath () {
    const questionId = this.props.params.questionId;
    hashHistory.push(`questions/${ questionId }/edit`);
  },

  destroyQuestion () {
    const questionId = this.props.params.questionId;
    QuestionActions.destroyQuestion(questionId);
    hashHistory.push('/');
  },

  ownershipButtons () {
    const questionId = this.props.params.questionId;

    if (window.currentUser &&
        window.currentUser.questions.indexOf(parseInt(questionId)) !== -1) {
      return (
        <div>
          <button onClick={ this.linkToEditPath }>edit</button>
          <button
            onClick={ this.destroyQuestion }
            className="red-button">delete</button>
        </div>
      );
    } else {
      return ('');
    }
  },

  toggleAnswering () {
    if (this.state.answering) {
      this.setState({ answering: false });
    } else {
      this.setState({ answering: true });
    }
  },

  answerButton () {
    if (window.currentUser && !(this.state.answering)) {
      return (
        <div>
          <button onClick={ this.toggleAnswering }>answer</button>
        </div>
      );
    }
  },

  createAnswerForm () {
    if (this.state.answering) {
      return (
        <div className="answer-create">
          <AnswerForm
            questionId={ this.props.params.questionId }
            closeSelf={ this.toggleAnswering }
            method="create" />
          <button onClick={ this.toggleAnswering }>cancel</button>
        </div>
      );
    }
  },

  showAnswers () {
    let answers = [];
    if (this.state.question.answers) {
      answers = this.state.question.answers;
    }

    if (answers.length > 0) {
      return (
        <AnswerIndex
          answers={ answers }
          questionId={ this.props.params.questionId } />
      );
    }
  },

  render () {

    return(
      <div className="question-detail">
        <div className="question-col">
            <h2>{ this.state.question.title }</h2>
            <div>
              <p>
                <CloudinaryImage
                  className="author-icon"
                  publicId={ imagePublicId }
                  options={{ width: 16, height: 16 }} />
                { this.state.question.authorName }
                { this.createdAgo() }
              </p>
              { this.ownershipButtons() }
            </div>

          <br />
          <p>{ this.state.question.description }</p>
          <br />
          { this.answerButton() }
          { this.createAnswerForm() }

          { this.showAnswers() }
        </div>
        <div className="related-col">
          <div className="related-col-content">
            <h4>Related Questions</h4>
            <ul>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
              <li>Question</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = QuestionDetail;
