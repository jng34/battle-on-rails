class PowerSerializer < ActiveModel::Serializer
  attributes :id, :name, :str, :hp, :description, :item

  def items
    self.object.item
  end
  
end
