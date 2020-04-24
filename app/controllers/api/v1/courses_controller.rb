class Api::V1::CoursesController < ApplicationController
  def index
    courses = Course.all.order(created_at: :desc)
    render json: courses
  end

  def create
  end

  def show
    if course
      render json: course
    else
      render json: course.errors
    end
  end

  def destroy
  end

  private

  def course
    @course ||= Course.find(params[:id])
  end
end
