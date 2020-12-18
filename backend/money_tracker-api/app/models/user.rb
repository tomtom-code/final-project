class User < ApplicationRecord
    has_secure_password
    has_many :accounts
    has_many :transactions
    validates :name, :email, uniqueness: { case_sensitive: false }
end
