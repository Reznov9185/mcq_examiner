ActiveAdmin.register Answer do
  menu priority: 4
  permit_params :statement, :display_order, :answer_type, :question_id
end
