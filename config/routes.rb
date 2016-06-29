Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :create, :show, :update, :destroy]
  end

  root 'static_pages#root'
end
