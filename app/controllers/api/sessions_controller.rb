class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render :root
    else
      render(
        json: {
          base: ["Invalid username/password combination"]
        },
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render :root
    else
      render(
        json: {
          base: ["No one is signed in"]
        },
        status: 404
      )
    end
  end
end
