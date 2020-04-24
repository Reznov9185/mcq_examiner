Rails.application.routes.draw do
  #
  # API URLs
  #
  namespace :api do
    namespace :v1 do
      #
      # Courses Routes
      #
      get 'courses/index'
      get '/show/:id', to: 'courses#show'

      #
      # Lessons Routes
      #
      get 'lessons/index'
      get 'lessons/show/:id', to: 'lessons#show'

      #
      # Questions & Evaluation Routes
      #
      get 'questions/index'
      get 'questions/show'
      post 'questions/evaluate'
    end
  end

  #
  # Admin URLs
  #
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  #
  # Main URLs
  #
  root 'homepage#index'
  get '/*path' => 'homepage#index', except: '/admin'
end
