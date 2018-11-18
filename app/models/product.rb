# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  image_url   :string           not null
#  price       :integer          not null
#  shop_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  validates :title, :description, :image_url, :price, :shop_id, presence: true
  validates :title, uniqueness: true

  belongs_to :shop,
    foreign_key: :shop_id,
    class_name: 'Shop'

  belongs_to :owner,
    through: :shop,
    source: :owner

end
