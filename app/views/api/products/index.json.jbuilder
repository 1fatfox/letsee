@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :description, :price, :shop_id
    json.photoUrl url_for(product.image_url)
  end
end
