# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Shop.destroy_all
Product.destroy_all

u1 = User.create!({})
s1 = Shop.create!({ name: "Shop1", user_id: })
p1 = Product.create!({title: "test", description: "Product1", image_url: "abc", price: "12" , shop_id: s1.id})
