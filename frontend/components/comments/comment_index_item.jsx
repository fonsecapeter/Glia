const React = require('react');
const Link = require('react-router').Link;

const SessionStore = require('../../stores/session_store');
const CommentActions = require('../../actions/comment_actions');

const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';
const binPublicId = 'bin_c5z2lh';

const CommentIndexItem = React.createClass({
  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount () {
    this.sessionListener.remove();
  },

  _destroyComment () {
    const comment = {
      id: this.props.comment.id,
      commentableType: this.props.commentableType,
      commentableId: this.props.commentableId
    };

    CommentActions.destroyComment(comment);
  },

  ownershipButtons () {
    const commentId = this.props.comment.id;

    if (SessionStore.isUserSignedIn() &&
        SessionStore.currentUser().comments.indexOf(parseInt(commentId)) !== -1) {
      return (
        <button
          onClick={ this._destroyComment }
          className="red-button">
          <CloudinaryImage
            className="button-icon"
            publicId={ binPublicId }
            options={{ width: 16, height: 16 }} />
        </button>
      );
    }
  },

  render () {
    return (
      <tr className="comment-index-item">
        <td className="author-info">
          <Link to={ `users/${ this.props.comment.authorId }` }>
            <CloudinaryImage
              className="author-icon"
              publicId={userPublicId}
              options={{ width: 16, height: 16 }} />
            { this.props.comment.authorName }:
          </Link> &nbsp;
        </td>
        <td>
          { this.props.comment.content } &nbsp;
        </td>
        <td>
          { this.ownershipButtons() }
        </td>
      </tr>
    );
  }
});

module.exports = CommentIndexItem;
