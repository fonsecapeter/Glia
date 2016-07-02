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

  render () {
    return (
      <div className="answer_index_item">
        <p>
          <CloudinaryImage
            className="author-icon"
            publicId={imagePublicId}
            options={{ width: 16, height: 16 }} />
          { this.props.answer.authorName }
          { this.createdAgo() }
        </p>
        <p>
          { this.props.answer.content }
        </p>
      </div>
    );
  }
});

module.exports = AnswerIndexItem;
