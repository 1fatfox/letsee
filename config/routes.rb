Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create] do
        resources :shops, only: [:show, :update, :destroy]
        resources :carts, only: [:create, :show, :update] do
          resources :cart_products, only: [:index, :create, :show, :update, :destroy]
        end
      end
      resource :session, only: [:create, :destroy, :show]
      resources :products
      resources :carts, only: [:show, :edit, :update]
      resources :shops, only: [:show, :index, :create] do
        resources :products, only: [:show, :update, :destroy, :create]
      end

    end

  root "static_pages#root"
end
