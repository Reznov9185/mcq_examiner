ActiveAdmin.register Question do
  menu priority: 3
  permit_params :statement, :marks, :display_order, :lesson_id
end
