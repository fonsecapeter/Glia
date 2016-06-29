class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all();

    render :index
  end

  def create
    @questoin = Question.new(quesion_params)
    @question.author_id = current_user.id

    if @question.save
      render :show
    else
      render json: {
        base: @question.errors.full_messages
      }
    end
  end

  def show
    @question = Question.find(params[:id])

    render :show
  end

  def update
    @question = Question.find(params[:id])

    if @question.update_attributes(question_params);
      render :show
    else
      render json: {
        base: @question.errors.full_messages
      }
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
  end

  private

  def question_params
    params.require(:question).permit(
      :title,
      :description,
      :answered
    )
  end
end
