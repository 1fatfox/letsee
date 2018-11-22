class Api::CartProductsController < ApplicationController

  def create
    @cart_product = CartProduct.new(cart_product_params)
    if @cart_product.save
      render :show
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_product = CartProduct.find_by(id: params[:id])
    if @pcart_roduct.destroy
      render :show
    else
      render json: @cart_product.errors.full_messages, status: 422
    end
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:cart_id, :product_id)
  end


end
