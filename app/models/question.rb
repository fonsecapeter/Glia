# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string
#  answered    :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Question < ActiveRecord::Base
  validates :author_id, :title, presence: true
  validates :answered, inclusion: { in: [true, false] }
  after_initialize :ensure_answered

  belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
  )

  has_many(
    :answers,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: 'Answer'
  )

  has_many :comments, as: :commentable

  def answered
    answers.length > 0
  end

  private

  def ensure_answered
    self.answered === answered
  end
end
