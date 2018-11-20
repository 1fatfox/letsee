@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :description, :price, :shop_id
    json.shop_name product.shop.name
    if product.image.attached?
      json.image url_for(product.image)
    end
  end
end
