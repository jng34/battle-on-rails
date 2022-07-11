class ItemSerializer < ActiveModel::Serializer
  attributes :name, :img_url, :description
end
