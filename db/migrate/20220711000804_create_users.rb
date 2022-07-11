class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :profile_img
      t.integer :base_hp
      t.integer :base_str

      t.timestamps
    end
  end
end
