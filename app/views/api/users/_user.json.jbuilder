json.extract! user, :id, :username
json.questions user.questions.map { |question| question.id }
