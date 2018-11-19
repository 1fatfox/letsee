class Api::ShopsController < ApplicationController

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render 'api/shops/show'
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:name, :user_id)
  end

end
