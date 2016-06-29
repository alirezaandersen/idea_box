Rails.application.routes.draw do

  root to: "ideas#index"

  resources :ideas

  put 'ideas/:id/upvote', to: 'ideas#upvote', as: 'upvote'
  put 'ideas/:id/downvote', to: 'ideas#downvote', as: 'downvote'
end
