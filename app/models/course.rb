# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  credits     :decimal(, )
#  description :text
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Course < ApplicationRecord
  #
  # associations
  #

  has_many :lessons, dependent: :destroy

  #
  # validations
  #

  validates_presence_of :name

  #
  # instance methods
  #

  def display_name
    "Course(#{id}): " + name
  end
end
