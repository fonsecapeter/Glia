const React = require('react');
const NewCommentForm = require('./new_comment_form');
const CommentIndexItem = require('./comment_index_item');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const userPublicId = 'user_j20bee';

const CommentIndex = React.createClass({
  render () {
    return (
      <div className="comment-index">
        <NewCommentForm
          commentableType={ this.props.commentableType }
          commentableId={ this.props.commentableId } />
        <table>
          <tbody>
            {
              this.props.comments.map( comment => {
                return (
                  <CommentIndexItem
                    commentableType={ this.props.commentableType }
                    commentableId={ this.props.commentableId }
                    comment={ comment }
                    key={ comment.id } />
                );
              }).reverse()
            }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CommentIndex;
