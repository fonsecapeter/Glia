class AddAvatarToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar, :string, null: false, default: 'http://res.cloudinary.com/dxhqr7u1z/image/upload/v1467319877/user_j20bee.png'
  end
end
