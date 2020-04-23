ActiveAdmin.register Question do
  permit_params :statement, :marks, :display_order, :lesson_id
end
