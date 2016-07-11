# json.extract! @question, :id, :title, :description, :answered, :author_id
json.question do
  json.id @question.id
  json.title @question.title
  json.description @question.description
  json.answered @question.answered
  json.authorId @question.author_id
  json.authorName @question.author.username
  json.createdAgo time_ago_in_words(@question.created_at)
  json.commentCount @question.comments.count
  json.topicIds @question.topics.map { |topic| topic.id }
  json.topics(@question.topics) do |topic|
    json.id topic.id
    json.name topic.name
  end
  json.comments(@question.comments) do |comment|
    json.id comment.id
    json.content comment.content
    json.commentableType comment.commentable_type
    json.authorId comment.author_id
    json.authorName comment.author.username
  end
  json.answers(@question.answers) do |answer|
    json.id answer.id
    json.content answer.content
    json.authorId answer.author_id
    json.authorName answer.author.username
    json.createdAgo time_ago_in_words(answer.created_at)
    json.commentCount answer.comments.count
    json.comments(answer.comments) do |comment|
      json.id comment.id
      json.content comment.content
      json.commentableType comment.commentable_type
      json.authorId comment.author_id
      json.authorName comment.author.username
    end
  end
  json.relatedQuestions(@question.related_questions) do |related_question|
    json.id related_question.id
    json.title related_question.title
  end
end
