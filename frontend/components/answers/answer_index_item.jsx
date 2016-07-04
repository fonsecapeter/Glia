const React = require('react');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const imagePublicId = 'user_j20bee';

const AnswerIndexItem = React.createClass({
  createdAgo () {
    let createdAgo = this.props.answer.createdAgo;

    return (
      <span className='light-text'>
        , { createdAgo } ago
      </span>
    );
  },

  editButton () {
    const answerId = this.props.answer.id;

    if (window.currentUser &&
        window.currentUser.answers.indexOf(parseInt(answerId)) !== -1) {
      return (
        <div>
          <button onClick={ this.linkToEditPath }>edit</button>
          <button
            onClick={ this.destroyAnswer }
            className="red-button">delete</button>
        </div>
      );
    }
  },

  render () {
    return (
      <div className="answer-index-item">
        <p>
          <CloudinaryImage
            className="author-icon"
            publicId={imagePublicId}
            options={{ width: 16, height: 16 }} />
          { this.props.answer.authorName }
          { this.createdAgo() }
        </p>
          { this.editButton () }
        <br />
        <p>
          { this.props.answer.content }
        </p>
      </div>
    );
  }
});

module.exports = AnswerIndexItem;
