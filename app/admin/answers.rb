ActiveAdmin.register Answer do
  permit_params :statement, :display_order, :answer_type, :question_id
end
