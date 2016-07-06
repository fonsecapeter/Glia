user = user || @user

json.extract! user, :id, :username
json.questions user.questions.map { |question| question.id }
json.answers user.answers.map { |answer| answer.id }
json.comments user.comments.map { |comment| comment.id }
