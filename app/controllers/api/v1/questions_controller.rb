class Api::V1::QuestionsController < ApplicationController
  def index
    questions = Question.where(lesson_id: params[:lesson_id])
                  .includes(:answers)
                  .order(created_at: :desc)
    render json: questions.to_json(include: {
      answers: { only: [:id, :statement]}
    })
  end

  def evaluate
    puts params.as_json
    questions = Question.where(lesson_id: params[:lesson_id])
                  .includes(:answers)
    total = questions.count
    score = 0
    questions.each do |ques|
      if ques.answers.right.pluck(:id).include? params[ques.id.to_s].to_i
        score += 1
      end
    end
    render json: {message: "Score: #{score} out of #{total}"}
  end

  def create
  end

  def show
  end

  def destroy
  end

  private

  def question
    @question ||= Question.find(params[:id])
  end
end
