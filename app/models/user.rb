# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many(
    :questions,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Question'
  )

  has_many(
    :answers,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Answer'
  )

  def self.find_by_credentials(username, password)
    # verify username
    user = User.find_by(username: username)
    return nil unless user
    # verify password
    user.password_is?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    ensure_session_token_uniqueness
    self.save

    self.session_token
  end

  private

  def generate_session_token
    SecureRandom.base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
  end
end
