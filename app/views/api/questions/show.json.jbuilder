# json.extract! @question, :id, :title, :description, :answered, :author_id
json.question do
  json.id @question.id
  json.title @question.title
  json.description @question.description
  json.answered @question.answered
  json.authorId @question.author_id
  json.authorName @question.author.username
end