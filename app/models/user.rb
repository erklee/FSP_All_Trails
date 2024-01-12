class User < ApplicationRecord
  has_secure_password

  validates :username, uniqueness: true, length: { in: 3..40 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, uniqueness: true, length: { in: 3..100 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..40 }, allow_nil: true
  before_validation :ensure_session_token

  def self.find_by_credentials(credential, password)
    
    # determine the field you need to query: 
    #   * `email` if `credential` matches `URI::MailTo::EMAIL_REGEXP`
    #   * `username` if not
    # find the user whose email/username is equal to `credential`
  
    # if no such user exists, return a falsey value
  
    # if a matching user exists, use `authenticate` to check the provided password
    # return the user if the password is correct, otherwise return a falsey value

    field = credential.match?(URI::MailTo::EMAIL_REGEXP) ? :email : :username
    user = User.find_by(field => credential)

    return nil unless user && user.authenticate(password)
    user
  end

  def reset_session_token!
    # `update!` the user's session token to a new, random token
    # return the new session token, for convenience
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end


  def generate_unique_session_token
    # in a loop:
      # use SecureRandom.base64 to generate a random token
      # use `User.exists?` to check if this `session_token` is already in use
      # if already in use, continue the loop, generating a new token
      # if not in use, return the token

      loop do
        token = SecureRandom.base64
        break token unless User.exists?(session_token: token)
      end
  end

  def ensure_session_token
    # if `self.session_token` is already present, leave it be
    # if `self.session_token` is nil, set it to `generate_unique_session_token`
    self.session_token ||= generate_unique_session_token
  end
  
end
