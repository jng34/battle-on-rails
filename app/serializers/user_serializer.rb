class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img, :base_hp, :base_str
end
