require 'rails_helper'

RSpec.describe Lesson, type: :model do
  it "is invalid with no attributes" do
    expect(Lesson.new).to be_invalid
  end

  it "is valid with valid attributes" do
    course = Course.create!(name: "testname")
    expect(Lesson.new(name: "testname", course_id: course.id)).to be_valid
  end
end
