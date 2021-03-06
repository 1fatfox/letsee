class Api::CartController < ApplicationController

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def show
    @cart = Cart.find_by(id: params[:id])
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    if @cart.update(cart_params)
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end



  private
  
  def cart_params
    params.require(:cart).permit(:user_id)
  end


end
