class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :shops, :name, unique: true
    add_index :shops, :user_id
  end
end
