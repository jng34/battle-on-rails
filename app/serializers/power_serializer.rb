class PowerSerializer < ActiveModel::Serializer
  attributes :id, :name, :str, :hp, :description, :user_id, :item_id
end
