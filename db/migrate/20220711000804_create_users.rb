class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :profile_img
      t.integer :base_hp, default: 5
      t.integer :base_str, default: 1
      t.string :password_digest

      t.timestamps
    end
  end
end
