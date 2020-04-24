ActiveAdmin.register Lesson do
  menu priority: 2
  permit_params :name, :description, :course_id
end
