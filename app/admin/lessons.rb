ActiveAdmin.register Lesson do
  permit_params :name, :description, :course_id
end
