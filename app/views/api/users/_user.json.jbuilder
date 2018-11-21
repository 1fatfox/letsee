
json.extract! user, :id, :email, :first_name
shop_id = nil
if user.shop
  shop_id = user.shop.id
end

json.shop shop_id
