# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Transaction.delete_all
Account.delete_all
Category.delete_all

users = [
    {name: 'Tom Lai', password: 't123', email: 'supertom888@gmail.com'},
    {name: 'Haley Proctor', password: 't123', email: 'haleyp33@gmail.com'},
    {name: 'Bob Siegel', password: 't123', email: 'bobbyc@gmail.com'},
    {name: 'Devin Lonetree', password: 't123', email: 'jdlonetree@gmail.com'}
]

users.each {| user | User.create(user)}

accounts = [
    {name: "cash", user_id: User.first.id, balance: 0.00,},
    {name: "credit card", user_id: User.first.id, balance: 0.00,},
    {name: "bank", user_id: User.first.id, balance: 0.00,}
    
]

accounts.each {| account | Account.create(account)}

transactions = [
    {date: "10-13-2020", account_id: Account.first.id, amount: 6.23, category: "Food", description: "happy hour from Sushi Bar"},
    {date: "10-4-2020", account_id: Account.first.id, amount: 7.35, category: "Beauty", description: "hair cut"},
    {date: "10-23-2020", account_id: Account.first.id, amount: 20.00, category: "Car", description: "gas"},
    {date: "10-14-2020", account_id: Account.second.id, amount: 78.73, category: "Groceries", description: "milk, fruit, vegetable...etc"},
    {date: "10-27-2020", account_id: Account.second.id, amount: 37.35, category: "Clothes", description: "forever 21 items"},
    {date: "10-18-2020", account_id: Account.second.id, amount: 32.57, category: "Entertainment", description: "bowling"},
    {date: "10-2-2020", account_id: Account.third.id, amount: 500.00, category: "House", description: "monthily rent"},
    {date: "10-3-2020", account_id: Account.third.id, amount: 120.00, category: "Utilities", description: "power, internet, phone bills"},
    {date: "10-2-2020", account_id: Account.third.id, amount: 600.00, category: "Education", description: "school tuition"}
    
    
]

transactions.each {| transaction | Transaction.create(transaction)}

categories = [
    {name: "Food"},
    {name: "Transportation"},
    {name: "Utilities"},
    {name: "House"},
    {name: "Clothes"},
    {name: "Car"},
    {name: "Entertainment"},
    {name: "Socializing"},
    {name: "Books"},
    {name: "Health"},
    {name: "Education"},
    {name: "Transfer fee"},
    {name: "Groceries"},
    {name: "Beauty"}
    
]

categories.each {| category | Category.create(category)}

