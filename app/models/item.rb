class Item < ApplicationRecord
    has_many :powers, dependent: :destroy
    has_many :users, through: :powers
end
