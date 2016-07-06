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
  validates_uniqueness_of :question, scope: :topic

  belongs_to :question
  belongs_to :topic
end
