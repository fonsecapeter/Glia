class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]

    if (current_user)
      @answer.author_id = current_user.id
    else
      @answer.author_id = 1
    end

    if @answer.save
      @user = current_user
      @question = @answer.question
      render :create
    else
      render json: {
        base: @answer.errors.full_messages
      }
    end
  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.update_attributes(answer_params);
      @question = @answer.question
      @user = current_user
      render :create
    else
      render json: {
        base: @answer.errors.full_messages
      }
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    @question = @answer.question
    @user = current_user
    render :create
  end

  private

  def answer_params
    params.require(:answer).permit(
      :content
    )
  end
end
