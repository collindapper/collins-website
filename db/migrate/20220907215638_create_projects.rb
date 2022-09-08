class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :date_completed
      t.string :live_url
      t.string :github_url
      
      t.string :images_url
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
