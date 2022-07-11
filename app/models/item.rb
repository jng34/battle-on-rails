class Item < ApplicationRecord
    has_many :powers
    has_many :users, through: :powers
end
