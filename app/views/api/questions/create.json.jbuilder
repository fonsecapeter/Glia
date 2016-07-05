json.question do
  json.partial! 'show'
end

json.user do
  json.partial! partial: 'api/users/user', user: @user
end
