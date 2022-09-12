class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :title
      t.string :certification_url
      t.string :linkedin_url

      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
