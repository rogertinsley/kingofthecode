Rails.application.routes.draw do

   resources :status

   root to: 'home#new'
   post "/status" => "status#create"
   get "/status" => "status#new"
   get "/points" => "points#new"
end
