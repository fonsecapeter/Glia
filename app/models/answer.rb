# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  content     :text             not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ActiveRecord::Base
  validates :content, :author_id, :question_id, presence: true

  belongs_to(
    :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: 'Question'
  )

  belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
  )

  has_many :comments, as: :commentable
end
