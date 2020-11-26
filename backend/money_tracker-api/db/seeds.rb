# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Transactions.delete_all
Accounts.delete_all
Category.delete_all

users = [
    {name: 'Tom Lai', password: 't123', email: 'supertom888@gmail.com'},
    {name: 'Haley Proctor', password: 't123', email: 'haleyp33@gmail.com'},
    {name: 'Bob Siegel', password: 't123', email: 'bobbyc@gmail.com'},
    {name: 'Devin Lonetree', password: 't123', email: 'jdlonetree@gmail.com'}
]

users.each {| user | User.create(user)}

Accounts = [
    {name: "cash", user_id: User.first.id, balance: 0.0,},
    {name: "credit card", user_id: User.second.id, balance: 0.0,},
    {name: "bank", user_id: User.third.id, balance: 0.0,},
    
]

Accounts.each {| list | Account.create(list)}
