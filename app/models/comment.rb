# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  content          :string           not null
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :content, :author_id, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
  )
end
