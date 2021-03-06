class Api::ProductsController < ApplicationController

   def create
     @product = Product.new(product_params)
     if @product.save
       render :show
     else
       render json: @product.errors.full_messages, status: 422
     end
   end

   def index
    @products = Product.all
    render :index
   end

   def show
     @product = Product.find_by(id: params[:id])
   end

   def update
     @product = Product.find_by(id: params[:id])
     if @product.update(product_params)
       render :show
     else
       render json: @product.errors.full_messages, status: 422
     end
   end

   def destroy
     @product = Product.find_by(id: params[:id])
     if @product.destroy
       render :show
     else
       render json: @product.errors.full_messages, status: 422
     end
   end

   private

   def product_params
     params.require(:product).permit(:title, :description, :price, :shop_id, :image)
   end

end
