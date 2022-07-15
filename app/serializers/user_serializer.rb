class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :base_hp, :base_str, :profile_img, :total_hp, :total_str
  has_many :powers
  
end
