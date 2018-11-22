class ChangeCartProducts < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:cart_products)
  end
end
