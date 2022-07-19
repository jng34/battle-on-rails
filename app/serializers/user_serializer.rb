class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img, :total_hp, :total_str
  has_many :powers
  
end
