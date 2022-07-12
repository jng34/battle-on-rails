class PowerSerializer < ActiveModel::Serializer
  attributes :id, :name, :str, :hp, :description, :item

  def item
    self.object.item
  end
  
end
