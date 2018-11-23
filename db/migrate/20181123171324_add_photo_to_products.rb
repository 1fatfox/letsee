class AddPhotoToProducts < ActiveRecord::Migration[5.2]
  def self.up
    add_attachment :products, :photo
  end

  def self.down
    remove_attachment :products, :photo
  end
end
