const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const CommentIndex = require('../comments/comment_index');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';

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

    ReactDOM.findDOMNode(this).scrollIntoView();
  },

  preview () {
    let preview = this.props.question.description;
    if (preview !== null &&
        preview.length > 200) {
      preview = preview.slice(0, 200) + '...';
      return (
        <div onClick={ this.expandDescription }>
          <div
            dangerouslySetInnerHTML={{__html:preview}} />
          <a onClick={ this.expandDescription }>(more)</a>
      </div>
      );
    } else {
      return (
        <div
          dangerouslySetInnerHTML={{__html:preview}} />
      );
    }
  },

  expanded () {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{__html:this.props.question.description}} />
        <a onClick={ this.shrinkDescription }>(less)</a>
      </div>
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

  answerCount () {
    let count = parseInt(this.props.question.answerCount);
    let text = '';
    if (count > 1) {
      text = `, ${ count } answers`;
    } else if (count === 1) {
      text = `, ${ count } answer`;
    } else {
      text = ', not answered yet';
    }

    return (
      <span className="light-text">
        { text }
      </span>
    );
  },

  render () {
    let detailPath = `questions/${ this.props.question.id }`;

    return (
      <div className="question-index-item quill-created">
        <Link to={ detailPath }><h3>{ this.props.question.title }</h3></Link>
        <p>
          <CloudinaryImage
            className="author-icon"
            publicId={userPublicId}
            options={{ width: 16, height: 16 }} />
          { this.props.question.authorName }
          { this.createdAgo() }
          { this.answerCount() }
        </p>
        { this.state.preview }
      </div>
    );
  }
});

module.exports = QuestionIndexItem;
