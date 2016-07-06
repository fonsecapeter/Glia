const React = require('react');
const hashHistory = require('react-router').hashHistory;
const QuestionStore = require('../../stores/question_store.js');
const SessionStore = require('../../stores/session_store');
const QuestionActions = require('../../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item');
const AnswerForm = require('../answers/answer_form');
const AnswerIndex = require('../answers/answer_index');
const CommentIndex = require('../comments/comment_index');

const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';
const binPublicId = 'bin_c5z2lh';
const pencilPublicId = 'pencil_pt3utn';
const commentPublicId = 'comment_dbsbo8';


const QuestionDetail = React.createClass({
  getInitialState () {
    return ({
      question: {},
      answering: false,
      commenting: false
    });
  },

  _onChange () {
    this.setState({
      question: QuestionStore.find(this.props.params.questionId)
    });
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
    QuestionActions.fetchQuestion(this.props.params.questionId);
  },

  componentWillUnmount () {
    this.questionListener.remove();
    this.sessionListener.remove();
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

    if (SessionStore.isUserSignedIn() &&
        SessionStore.currentUser().questions.indexOf(parseInt(questionId)) !== -1) {
      return (
        <div>
          <button onClick={ this.linkToEditPath }>
            <CloudinaryImage
              className="button-icon"
              publicId={ pencilPublicId }
              options={{ width: 16, height: 16 }} />
          </button>
          <button
            onClick={ this.destroyQuestion }
            className="red-button">
            <CloudinaryImage
              className="button-icon"
              publicId={ binPublicId }
              options={{ width: 16, height: 16 }} />
          </button>
        </div>
      );
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
    if (SessionStore.isUserSignedIn() && !(this.state.answering)) {
      return (
        <button
          onClick={ this.toggleAnswering }
          className="v-align-center">answer</button>
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

  commentIndex () {
    if (this.state.commenting) {
      return (
        <CommentIndex
          commentableType="Question"
          commentableId={ this.props.params.questionId }
          comments={ this.state.question.comments } />
      );
    }
  },

  toggleCommenting () {
    if (this.state.commenting) {
      this.setState({ commenting: false });
    } else {
      this.setState({ commenting: true });
    }
  },

  commentButton () {
    let commentCount = this.state.question.commentCount;
    if  (commentCount < 1) {
      commentCount = '';
    }

    return (
      <button
        onClick={ this.toggleCommenting }>
        { commentCount }
        <CloudinaryImage
          className="button-icon v-align-center"
          publicId={ commentPublicId }
          options={{ width: 16, height: 16 }} />
      </button>
    );
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
                  publicId={ userPublicId }
                  options={{ width: 16, height: 16 }} />
                { this.state.question.authorName }
                { this.createdAgo() }
              </p>
              { this.ownershipButtons() }
            </div>

          <br />
          <p>{ this.state.question.description }</p>
          <br />
          <div>
            { this.answerButton() }
            { this.commentButton() }
          </div>
          { this.createAnswerForm() }
          { this.commentIndex() }

          { this.showAnswers() }
        </div>
        <div className="related-col">
          <div className="related-col-content">
            <div className="card-top">
              <h4 className="card-top-content">Related Questions</h4>
            </div>
            <div className="card-bottom">
              <ul className="card-bottom-content">
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
      </div>
    );
  }
});

module.exports = QuestionDetail;
