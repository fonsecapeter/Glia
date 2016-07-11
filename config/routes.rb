Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    get 'users/:id', to: 'users#show'
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :create, :show, :update, :destroy] do
      resources :answers, only: [:index, :create, :show, :update, :destroy]
    end
    resources :comments, only: [:create, :destroy]
    resources :topics, only: [:index, :create]
  end

  root 'static_pages#root'
end
