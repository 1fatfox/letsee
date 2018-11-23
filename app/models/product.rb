# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  price       :integer          not null
#  shop_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  validates :title, :description, :price, presence: true
  validates :title, uniqueness: true

  belongs_to :shop,
    foreign_key: :shop_id,
    class_name: 'Shop'

  has_one :owner,
    through: :shop,
    source: :owner

  has_many :cart_product

  has_one_attached :image

  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  # heroku photo

  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/


end
