json.shop do
  json.extract! @shop, :id, :name, :user_id, :product_ids
end
json.shopId @shop.id

 if @shop.products
   json.products do
      @shop.products.each do |product|
        json.set! product.id do
          json.extract! product, :id, :title, :description, :price, :shop_id
        end
      end
    end
  end
