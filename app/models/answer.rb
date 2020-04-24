# == Schema Information
#
# Table name: answers
#
#  id            :bigint           not null, primary key
#  answer_type   :integer          default("wrong"), not null
#  display_order :bigint           default(0), not null
#  statement     :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  question_id   :bigint           not null
#
# Indexes
#
#  index_answers_on_question_id  (question_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#
class Answer < ApplicationRecord
  #
  # constants and enum
  #

  enum answer_type: %i[wrong right]

  #
  # associations
  #

  belongs_to :question

  #
  # validations
  #

  validates_presence_of :statement, :answer_type, :display_order
  #
  # instance methods
  #

  def to_s
    "Course#{question.lesson.course.id}: " + question.lesson.course.name + " -> " +
      "Lesson#{question.lesson.id}: " + question.lesson.name + " -> " +
      "Question#{question.id}: " + question.statement + " -> "
      "Answer#{id}: " + statement
  end
end
