Rails.application.routes.draw do
  root 'cats#index'
  resources :owls
  resources :hedgehogs
  resources :chicks
  resources :dogs
  resources :cats
end
