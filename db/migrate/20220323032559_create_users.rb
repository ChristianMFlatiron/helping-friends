class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :profile_imageUrl
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.integer :instrument_id
    



      t.timestamps
    end
  end
end
