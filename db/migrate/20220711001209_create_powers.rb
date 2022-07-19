class CreatePowers < ActiveRecord::Migration[6.1]
  def change
    create_table :powers do |t|
      t.string :name
      t.integer :str
      t.integer :hp
      t.text :description
      t.integer :user_id
      t.integer :item_id

      t.timestamps
    end
  end
end
