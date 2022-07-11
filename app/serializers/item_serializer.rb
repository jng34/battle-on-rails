class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :description
end
