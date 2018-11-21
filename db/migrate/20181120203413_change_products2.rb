class ChangeProducts2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :products, :shop_id, true
  end
end
