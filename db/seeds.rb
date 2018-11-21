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

u1 = User.create!({email: "test@email.com", password:"test123", first_name: "test", shop_id: 1})
u2 = User.create!({email: "test2@email.com", password:"test123", first_name: "test2", shop_id: 2})
u3 = User.create!({email: "test3@email.com", password:"test123", first_name: "test3", shop_id: 3})

s1 = Shop.create!({ name: "Shop1", user_id: u1.id})
s2 = Shop.create!({ name: "Shop2", user_id: u2.id})
s3 = Shop.create!({ name: "Shop3", user_id: u3.id})

p1 = Product.create!({title: "test", description: "Product1", price: "12" , shop_id: s1.id})
p2 = Product.create!({title: "test2", description: "Product2", price: "13" , shop_id: s2.id})
p3 = Product.create!({title: "test3", description: "Product3", price: "14" , shop_id: s3.id})
p4 = Product.create!({title: "test4", description: "Product4", price: "16" , shop_id: s3.id})
p5 = Product.create!({title: "test5", description: "Product5", price: "18" , shop_id: s3.id})
p6 = Product.create!({title: "test6", description: "Product6", price: "20" , shop_id: s3.id})
