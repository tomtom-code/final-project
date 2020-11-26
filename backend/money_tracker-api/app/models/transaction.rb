class Transaction < ApplicationRecord
    belongs_to :account
    has_many :transaction_categories
    has_many :categories, through: :transaction_categories
end
