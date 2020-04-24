class Api::V1::LessonsController < ApplicationController
  def index
    lessons = Lesson.where(course_id: params[:course_id])
                .order(created_at: :desc)
    render json: lessons
  end

  def create
  end

  def show
  end

  def destroy
  end

  private

  def lesson
    @lesson ||= Lesson.find(params[:id])
  end
end
