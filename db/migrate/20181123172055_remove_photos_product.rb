class RemovePhotosProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :photo
  end
end
