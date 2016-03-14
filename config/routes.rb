Rails.application.routes.draw do

   resources :repository

   root to: 'home#new'
   post "/status" => "status#create"
end
