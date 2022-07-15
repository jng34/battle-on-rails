class PowerSerializer < ActiveModel::Serializer
  attributes :id, :name, :str, :hp, :description, :item_name, :item_img

  def item_name
    self.object.item.name
  end

  def item_img
    self.object.item.img_url
  end
  
end
