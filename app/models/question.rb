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

  private

  def ensure_answered
    self.answered === answered || false
  end
end
