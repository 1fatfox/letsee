# == Schema Information
#
# Table name: cart_products
#
#  id         :bigint(8)        not null, primary key
#  cart_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartProduct < ApplicationRecord
  validates :cart_id, :product_id, presence: true

  belongs_to :cart
  belongs_to :product
end
