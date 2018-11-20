json.product do
  json.extract! @product, :id, :title, :description, :price, :shop_id
end
