class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.commentable_id = params[:comment][:commentable_id]
    @comment.commentable_type = params[:comment][:commentable_type]

    if (current_user)
      @comment.author_id = current_user.id
    else
      @comment.author_id = 1
    end

    if @comment.save
      @user = current_user

      if @comment.commentable_type = 'Question'
        @question = @comment.commentable
      else
        @question = @comment.commentable.question
      end

      render 'api/answers/create'
    else
      render json: {
        base: @comment.errors.full_messages
      }
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    if commentable_type = 'Question'
      @question = @comment.commentable
    else
      @question = @comment.commentable.question
    end

    @cuser = current_user
    render 'api/answers/create'
  end

  private

  def comment_params
    params.require(:comment).permit(
      :content,
      :commentable_id,
      :commentable_type
    )
  end
end
