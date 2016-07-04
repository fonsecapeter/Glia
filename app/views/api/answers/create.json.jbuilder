json.partial! partial: 'api/questions/show', as: 'question'
json.partial! partial: 'api/users/user', user: @user, as: :user
