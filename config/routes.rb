Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'

    get '/collindapper/about' => 'static_pages#about'
    get '/collindapper/projects' => 'static_pages#projects'
    get '/collindapper/skills' => 'static_pages#skills'

    namespace :api do

      #USERS
      post '/users' => 'users#create'
    
    end
  
end
