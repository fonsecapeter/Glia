json.extract! @user, :id, :username
json.questionCount @user.questions.count
json.answerCount @user.answers.count
json.avatar @user.avatar
json.questions(@user.questions) do |question|
  json.id question.id
  json.title question.title
end
json.answers(@user.answers) do |answer|
  json.id answer.id
  json.questionTitle answer.question.title
  json.questionId answer.question.id
  json.preview answer.content.length > 100 ? "#{answer.content[0...100]}..." : answer.content
end
