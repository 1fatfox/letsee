class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.integer :price, null: false
      t.integer :shop_id, null: false
      t.timestamps
    end
    add_index :products, :title, unique: true
    add_index :products, :shop_id
  end
end
