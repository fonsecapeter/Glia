# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
questions = [
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

questions.each do |question|
  Question.create!(
    author_id: rand(2...31),
    title: question,
    description: Faker::Lorem.paragraph
  )
end

30.times do
  Question.create!(
    author_id: 1,
    title: 'What is a question?'
  )
end

# 10.times do
#   Question.create(
#     author_id
#   )
# end
