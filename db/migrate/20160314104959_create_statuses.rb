class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :name
      t.string :context
      t.string :description
      t.text :state
      t.text :user_name
      t.text :avatar_url

      t.timestamps null: false
    end
  end
end
