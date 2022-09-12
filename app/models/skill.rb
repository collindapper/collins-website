class Skill < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :certification_url, presence: true
  validates :linkedin_url, presence: true
  validates :user, presence: true
end
