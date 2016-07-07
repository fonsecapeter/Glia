# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
QUESTIONS = [
  'What is Alzheimer’s disease and how does it differ from dementia?',
  'What is clinical research?',
  'What is a clinical trial?',
  'Why participate in a clinical trial?',
  'What happens when a person signs up for a clinical trial?',
  'Who can participate in a clinical trial?',
  'What are some common inclusion criteria for clinical trials for Alzheimer’s disease?',
  'What are some common exclusion criteria for clinical trials for AD?',
  'What happens during a trial?',
  'What should people consider before participating in a clinical trial?',
  'What are other benefits and risks of participating in a clinical trial?',
  'Who pays for research?',
  'How is the safety of the participant protected?',
  'What should people ask before participating in a trial?',
  'Does a participant continue to work with a primary health care provider while in a trial?',
  'Can a participant leave a clinical trial after it has begun?',
  'Where do the ideas for trials come from?',
  'What is a placebo?',
  'What is a control or control group?',
  'What are the different types of clinical trials?',
  'What are the phases of clinical trials?'
]

TOPICS = [
  'Science',  # 0
  'Research', # 1
  'Dementia', # 2
  'Alzheimer\'s Disease', # 3
  'Trials',   # 4
  'Advice',   # 5
  'Safety'    # 6
]

TOPIC_TAGGINGS = [
  [3, 2, 0],
  [1, 0],
  [4, 1, 0],
  [4, 1, 5],
  [4, 1, 6],
  [4, 1],
  [4, 1, 0, 3],
  [4, 1, 0, 3],
  [4, 1, 6],
  [4, 1, 6, 5],
  [4, 1, 6, 5],
  [1],
  [6],
  [6, 4, 5],
  [4, 6],
  [4, 6],
  [4, 1, 0],
  [4, 1, 0],
  [1, 0],
  [4, 1, 0],
  [4, 1, 0]
]

User.create!(
  username: 'guest',
  password: 'password'
)

30.times do
  User.create!(
    username: Faker::Name.first_name,
    password: 'password'
  )
end

TOPICS.each do |topic|
  Topic.create!(name: topic)
end

QUESTIONS.each_with_index do |question, idx|
  q = Question.create!(
    author_id: rand(2...31),
    title: question,
    description: Faker::Lorem.paragraph(rand(2...100)),
    topic_ids: TOPIC_TAGGINGS[idx].map { |tag_id| tag_id + 1 }
  )
end

100.times do
  Answer.create!(
    author_id: rand(2...31),
    question_id: rand(1...21),
    content: Faker::Lorem.paragraph(rand(2...100))
  )
end

50.times do
  Comment.create!(
    author_id: rand(2...31),
    commentable: Question.find(rand(1...21)),
    content: Faker::Lorem.sentence
  )

  Comment.create!(
    author_id: rand(2...31),
    commentable: Answer.find(rand(1...100)),
    content: Faker::Lorem.sentence
  )
end
