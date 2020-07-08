class Skill < ApplicationRecord
  validates :level, presence: true
  validates :title, presence: true
end
