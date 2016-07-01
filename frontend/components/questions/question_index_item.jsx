const React = require('react');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const imagePublicId = 'user_j20bee';

const QuestionIndexItem = React.createClass({
  render () {
    return (
      <div className="question-index-item">
        <p>{ this.props.question.title }</p>
        <p>
          <CloudinaryImage className="author-icon" publicId={imagePublicId} options={{ width: 16, height: 16 }} />
          { this.props.question.authorName }
        </p>
      </div>
    );
  }
});

module.exports = QuestionIndexItem;
