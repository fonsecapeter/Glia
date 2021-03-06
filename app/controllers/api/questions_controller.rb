class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all();

    if topic_id
      @questions = Topic.find(topic_id).questions
    end

    render :index
  end

  def create
    @question = Question.new(question_params)
    if (current_user)
      @question.author_id = current_user.id
    else
      @question.author_id = 1
    end

    if @question.save
      @user = current_user
      render :create
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
    render :show
  end

  private

  def question_params
    params.require(:question).permit(
      :title,
      :description,
      topic_ids: []
    )
  end

  def topic_id
    params[:topic_id]
  end
end
