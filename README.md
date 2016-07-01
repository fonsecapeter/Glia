# Glia
[Heroku link](https://www.heroku.com)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
Glia is a web application (inspired by Quora) that will be built using Ruby on Rails and React.js. The concept is an online support-group for caregivers. By the end of week 9, this app, will, at a minimum, satisfy the following critera:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Minimum necessary features:
  - [x] Authentication
    - [x] Create an account
    - [x] Log in / out
    - [x] demo user
  - [ ] Questions
    - [x] create
    - [ ] read as index and detail (all)
    - [ ] edit (own)
    - [ ] delete (own)
  - [ ] Answers for questions
    - [ ] create answer for question (all)
    - [ ] read list for each question (all)
    - [ ] edit (own)
    - [ ] delete (own)
  - [ ] Comments for Answers
    - [ ] create comment for answer (all)
    - [ ] read list for each answer (all)
    - [ ] delete (own)
  - [ ] Search for Questions
  - [ ] Topics
    - [ ] filter questions by topic
    - [ ] add topics to questions (own)
    - [ ] remove topics from questions (own)
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days, W1 Tu 12pm)

**Objective:** Functioning rails project with Authentication (frontend and backend)

- [x] create new project
- [x] heroku deployment
- [x] create `User` model
- [x] authentication
- [x] user sign-up/sign-in pages
- [x] blank landing page after sign-in
- [x] error handling
- [x] guest account

### Phase 2: Questions Model, API, and basic APIUtil (1.5 days, W1 Wed 6pm)

**Objective:** Questions can be created, read, edited and destroyed through
the API.

- [x] create `Questions` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for questions (`QuestionsController`)
- [x] jBuilder views for questions
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 12pm)

**Objective:** Questions can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each Question component, building out the flux loop as needed.
  - [x] `QuestionsIndex`
  - [x] `QuestionIndexItem`
  - [x] `NewQuestionForm`
  - [ ] `EditQuestionForm`

### Phase 4: Answers (1.5 days, W2 M 6pm)

**Objective:** Answers belong to Questions, and can be viewed in QuestionDetail.

- [ ] create `Answer` model
- build out API, Flux loop, and components for:
  - [ ] Answer CRUD
  - [ ] adding answers requires a login
- Use CSS to style QuestionDetail

### Phase 5: Comments (1 day, W2 Tu 12pm)

**Objective:** Comments belong to Answers, and can be viewed in QuestionDetail.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] adding comments requires a login
- Use CSS to style QuestionDetail

### Phase 6: Topics (1.5 days, W2 W 6pm)

**Objective:** Questions can be tagged with multiple Topics.

- [ ] create `Topic` model and `TopicTagging` join table
- build out API, Flux loop, and components for:
  - [ ] fetching TopicTags for questions
  - [ ] adding TopicTags to questions
  - [ ] creating TopicTags while adding to questions
  - [ ] searching questions by TopicTags
- [ ] Style new elements for filtered QuestionIndex (by topic)

### Phase 7: Rich Text Formatting (1 day, W2 Th 6pm)

**objective:** Enable complex styling of answers.

- [ ] Integrate rich text formatting (`react-quill` based on Quill.js looks great).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new AnswerForm.

### Phase 8: Searchable (1 day, W2 F 6pm)

**objective:** Enable question searches.

- [ ] Create searchResult dropdown component that responds to question input
- [ ] Limit to 5 results
- [ ] Search button to display all search results
- [ ] Style new elements in filtered QuestionIndex

### Bonus Features (TBD)
- [ ] User status of healthcare provider + visual distinction in answers
- [ ] Support groups for private questions
- [ ] Pagination / infinite scroll for Questions Index
- [ ] Responsive layout
