Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 namespace :api do
  namespace :v1 do
    post '/login', to: 'auth#create'
    delete '/logout', to: 'auth#destroy'
    get '/logged_in', to: 'application#logged_in?'
    get '/user', to: 'users#get_user'
    
    resources :accounts
    resources :transactions
    resources :categories
    resources :users, only: [:create, :index]
  end
 end 
end
