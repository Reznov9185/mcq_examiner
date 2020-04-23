# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  display_order :bigint           default(0), not null
#  marks         :decimal(, )
#  statement     :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  lesson_id     :bigint           not null
#
# Indexes
#
#  index_questions_on_lesson_id  (lesson_id)
#
# Foreign Keys
#
#  fk_rails_...  (lesson_id => lessons.id)
#
class Question < ApplicationRecord
  #
  # associations
  #

  belongs_to :lesson
  has_many :answers, dependent: :destroy

  #
  # validations
  #

  validates_presence_of :statement, :marks, :lesson_id, :display_order
end
