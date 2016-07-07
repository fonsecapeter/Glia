@topics.each do |topic|
  json.set! topic.id do
    json.id topic.id
    json.name topic.name
  end
end
