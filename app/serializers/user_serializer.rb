class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img, :base_hp, :base_str
  has_many :powers
  has_many :items
end
