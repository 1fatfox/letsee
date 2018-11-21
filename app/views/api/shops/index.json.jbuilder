@shops.each do |shop|
  json.set! shop.id do
    json.extract! shop, :id, :name, :user_id, :product_ids
  end
end
