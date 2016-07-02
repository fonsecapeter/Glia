class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.where(question_id: params[:question_id])

    render :index
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]
    
    if (current_user)
      @answer.author_id = current_user.id
    else
      @answer.author_id = 1
    end

    if @answer.save
      render :show
    else
      render json: {
        base: @answer.errors.full_messages
      }
    end
  end

  def show
    @answer = Answer.find(params[:id])

    render :show
  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.update_attributes(answer_params);
      render :show
    else
      render json: {
        base: @answer.errors.full_messages
      }
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    render :show
  end

  private

  def answer_params
    params.require(:answer).permit(
      :content
    )
  end
end
