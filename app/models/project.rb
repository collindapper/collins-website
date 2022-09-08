class Project < ApplicationRecord
  belongs_to :user

  has_many_attached :images, dependent: :destroy

  validates :title, presence: true
  validates :description, presence: true 
  validates :date_completed, presence: true
  validates :live_url, presence: true
  validates :github_url, presence: true
  validates :user, presence: true
end
