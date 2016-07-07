# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :topic_taggings, inverse_of: :topic, dependent: :destroy
  has_many :questions, through: :topic_taggings, source: :question
end
