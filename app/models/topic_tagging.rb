# == Schema Information
#
# Table name: topic_taggings
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  topic_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class TopicTagging < ActiveRecord::Base
  validates :question, :topic, presence: true
  # validates_uniqueness_of :topic, scope: :question

  belongs_to :question, inverse_of: :topic_taggings
  belongs_to :topic, inverse_of: :topic_taggings
end
