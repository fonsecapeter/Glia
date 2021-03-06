class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    session[:session_token] = nil
    current_user.reset_session_token!
    @current_user = nil
  end

  def require_signed_in
    render json: { base: ['invalid credentials'] }, status: 401 if !current_user
  end
end
