const React = require('react');
const SessionStore = require('../../stores/session_store');

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
    console.log('DESTROY');
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
          <CloudinaryImage
            className="author-icon"
            publicId={userPublicId}
            options={{ width: 16, height: 16 }} />
          { this.props.comment.authorName }: &nbsp;
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
