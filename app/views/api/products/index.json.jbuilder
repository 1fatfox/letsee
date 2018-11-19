@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :description, :image_url, :price, :shop_id
  end
end
