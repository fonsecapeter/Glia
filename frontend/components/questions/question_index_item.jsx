const React = require('react');
const Link = require('react-router').Link;
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const imagePublicId = 'user_j20bee';

const QuestionIndexItem = React.createClass({
  getInitialState () {
    return ({
      preview: this.preview()
    });
  },

  expandDescription () {
    this.setState({
      preview: this.expanded ()
    });
  },

  shrinkDescription () {
    this.setState({
      preview: this.preview()
    });
  },

  preview () {
    let preview = this.props.question.description;
    if (preview !== null &&
        preview.length > 200) {
      preview = preview.slice(0, 200) + '...';
      return (
        <p>
          { preview } <a onClick={ this.expandDescription }>(more)</a>
        </p>
      );
    } else {
      return (
        <p>
          { preview }
        </p>
      );
    }
  },

  expanded () {
    return (
      <p>
        { this.props.question.description }
        <a onClick={ this.shrinkDescription }>(less)</a>
      </p>
    );
  },

  createdAgo () {
    let createdAgo = this.props.question.createdAgo;

    return (
      <span className='light-text'>
        , { createdAgo } ago
      </span>
    );
  },

  render () {
    let detailPath = `questions/${this.props.question.id}`;

    return (
      <div className="question-index-item">
        <Link to={ detailPath }><h3>{ this.props.question.title }</h3></Link>
        <p>
          <CloudinaryImage
            className="author-icon"
            publicId={imagePublicId}
            options={{ width: 16, height: 16 }} />
          { this.props.question.authorName }
          { this.createdAgo() }
        </p>
        { this.state.preview }
      </div>
    );
  }
});

module.exports = QuestionIndexItem;
