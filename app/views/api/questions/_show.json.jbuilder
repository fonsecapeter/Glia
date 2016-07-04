# json.extract! @question, :id, :title, :description, :answered, :author_id
answers = @question.answers

json.question do
  json.id @question.id
  json.title @question.title
  json.description @question.description
  json.answered @question.answered
  json.authorId @question.author_id
  json.authorName @question.author.username
  json.createdAgo time_ago_in_words(@question.created_at)
  json.answers(answers) do |answer|
    json.id answer.id
    json.content answer.content
    json.authorId answer.author_id
    json.authorName answer.author.username
    json.createdAgo time_ago_in_words(answer.created_at)
  end
end
