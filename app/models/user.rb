class User < ApplicationRecord
    has_secure_password

    validates :name, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
    #Password validations
    # validate :password_lower_case
    # validate :password_uppercase
    # validate :password_special_char
    # validate :password_contains_number

    has_many :powers
    has_many :items, through: :powers

    #Instance Methods
    def total_str
        self.base_str + self.powers.sum{|power| power.str}
    end
    
    def total_hp
        self.base_hp + self.powers.sum{|power| power.hp}
    end


    #Password Validation Methods
    def password_uppercase
      return if !!password.match(/\p{Upper}/)
      errors.add :password, ' must contain at least 1 uppercase '
    end
  
    def password_lower_case
      return if !!password.match(/\p{Lower}/)
      errors.add :password, ' must contain at least 1 lowercase '
    end
  
    def password_special_char
      special = "?<>',?[]}{=-)(*&^%$#`~{}!"
      regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
      return if password =~ regex
      errors.add :password, ' must contain special character'
    end
  
    def password_contains_number
      return if password.count("0-9") > 0
      errors.add :password, ' must contain at least one number'
    end
  
end
