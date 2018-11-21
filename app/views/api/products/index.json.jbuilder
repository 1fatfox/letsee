@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :description, :price, :shop_id

    if product.shop
      json.shop_name product.shop.name
    end

    if product.image.attached?
      json.image url_for(product.image)
    end
  end
end
