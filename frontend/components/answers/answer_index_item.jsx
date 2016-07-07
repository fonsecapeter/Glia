const React = require('react');
const SessionStore = require('../../stores/session_store');
const AnswerActions = require('../../actions/answer_actions');
const AnswerForm = require('./answer_form');
const CommentIndex = require('../comments/comment_index');

const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';
const binPublicId = 'bin_c5z2lh';
const pencilPublicId = 'pencil_pt3utn';
const commentPublicId = 'comment_dbsbo8';

const AnswerIndexItem = React.createClass({
  getInitialState () {
    return ({
      editing: false,
      commenting: false
    });
  },

  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount () {
    this.sessionListener.remove();
  },

  createdAgo () {
    let createdAgo = this.props.answer.createdAgo;

    return (
      <span className='light-text'>
        , { createdAgo } ago
      </span>
    );
  },

  _toggleEditing () {
    if (this.state.editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
  },

  _destroyAnswer () {
    const answerData = {
      answerId: this.props.answer.id,
      questionId: parseInt(this.props.questionId)
    };

    AnswerActions.destroyAnswer(answerData);
  },

  editButton () {
    const answerId = this.props.answer.id;

    if (SessionStore.isUserSignedIn() &&
        SessionStore.currentUser().answers.indexOf(parseInt(answerId)) !== -1) {
      return (
        <div>
          <button onClick={ this._toggleEditing }>
            <CloudinaryImage
              className="button-icon"
              publicId={ pencilPublicId }
              options={{ width: 16, height: 16 }} />
          </button>
          <button
            onClick={ this._destroyAnswer }
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

  commentIndex () {
    if (this.state.commenting) {
      return (
        <CommentIndex
          commentableType="Answer"
          commentableId={ this.props.answer.id }
          comments={ this.props.answer.comments } />
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
    let commentCount = this.props.answer.commentCount;
    if  (commentCount < 1) {
      commentCount = '';
    }

    return (
      <button
        onClick={ this.toggleCommenting }>
        { commentCount }
        <CloudinaryImage
          className="button-icon"
          publicId={ commentPublicId }
          options={{ width: 16, height: 16 }} />
      </button>
    );
  },

  render () {
    if (this.state.editing) {
      return (
        <div className="answer-index-item">
          <p>
            <CloudinaryImage
              className="author-icon"
              publicId={userPublicId}
              options={{ width: 16, height: 16 }} />
            { this.props.answer.authorName }
          </p>
          <div>
            <div className="answer-create">
              <AnswerForm
                questionId={ this.props.questionId }
                content={ this.props.answer.content }
                closeSelf={ this._toggleEditing }
                answerId={ this.props.answer.id }
                method="edit" />
              <button onClick={ this._toggleEditing }>cancel</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="answer-index-item quill-created">
          <p>
            <CloudinaryImage
              className="author-icon"
              publicId={userPublicId}
              options={{ width: 16, height: 16 }} />
            { this.props.answer.authorName }
            { this.createdAgo() }
          </p>
          { this.editButton () }
          <br />
          <div
            dangerouslySetInnerHTML={{__html:this.props.answer.content}} />
          { this.commentButton() }
          { this.commentIndex() }
        </div>
      );
    }
  }
});

module.exports = AnswerIndexItem;
