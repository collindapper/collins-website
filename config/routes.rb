Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'

    get '/about' => 'static_pages#about'
    get '/projects' => 'static_pages#projects'
    get '/skills' => 'static_pages#skills'
    get '/cyber' => 'static_pages#cyber'

    namespace :api do
      # USERS
      post '/users' => 'users#create'

      # SESSIONS
      post '/sessions' => 'sessions#create'
      get '/authenticated' => 'sessions#authenticated'
      delete '/sessions' => 'sessions#destroy'

      # PROJECTS
      post '/projects' => 'projects#create'
      get '/projects/' => 'projects#index'
      delete '/projects/:id' => 'projects#destroy'

      # SKILLS
      post '/skills' => 'skills#create'
      get '/skills/' => 'skills#index'
      delete '/skills/:id' => 'skills#destroy'
      
    end
end
