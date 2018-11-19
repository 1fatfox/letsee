json.product do
  json.extract! @product, :id, :title, :description, :image_url, :price, :shop_id
end
