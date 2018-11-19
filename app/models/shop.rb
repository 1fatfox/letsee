# == Schema Information
#
# Table name: shops
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shop < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :owner,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :products,
    foreign_key: :shop_id,
    class_name: 'Product'

end
