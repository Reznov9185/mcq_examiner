ActiveAdmin.register Course do
  menu priority: 1
  permit_params :name, :description, :credits
end
