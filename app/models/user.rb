class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true, uniqueness: true
    # validates :password
    has_many :powers
    has_many :items, through: :powers

    def total_str
        self.base_str + self.powers.sum{|power| power.str}
    end
    
    def total_hp
        self.base_hp + self.powers.sum{|power| power.hp}
    end
end
