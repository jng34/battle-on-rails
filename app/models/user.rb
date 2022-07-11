class User < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    
    has_many :powers
    has_many :items, through: :powers
end
