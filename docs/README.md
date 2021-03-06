# Glia
[Heroku link](https://glia-app.herokuapp.com)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
Glia is a web application (inspired by Quora) that will be built using Ruby on Rails and React.js. The concept is an online support-group for caregivers. By the end of week 9, this app, will, at a minimum, satisfy the following critera:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Minimum necessary features:
  - [x] Authentication
    - [x] Create an account
    - [x] Log in / out
    - [x] demo user
  - [x] Questions
    - [x] create
    - [x] read as index and detail (all)
    - [x] edit (own)
    - [x] delete (own)
  - [x] Answers for questions
    - [x] create answer for question (all)
    - [x] read list for each question (all)
    - [x] edit (own)
    - [x] delete (own)
  - [x] Comments for Answers
    - [x] create comment for answer (all)
    - [x] read list for each answer (all)
    - [x] delete (own)
  - [x] Topics
    - [x] filter questions by topic
    - [x] add topics to questions (own)
    - [x] remove topics from questions (own)
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling

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
  - [x] `QuestionDetail`
  - [x] `NewQuestionForm`
  - [x] `EditQuestionForm`

### Phase 4: Answers (1.5 days, W2 M 6pm)

**Objective:** Answers belong to Questions, and can be viewed in QuestionDetail.

- [x] create `Answer` model
- build out API, Flux loop, and components for:
  - [x] Answer CRUD
  - [x] adding answers requires a login
- [x] Use CSS to style QuestionDetail, AnswerIndex, AnswerIndexItem, and AnswerIndexForms

### Phase 5: Comments (1.5 day, W2 Tu 6pm)

**Objective:** Comments belong to Answers, and can be viewed in QuestionDetail.

- [x] create `Comment` model
- build out API, Flux loop, and components for:
  - [x] Comment CRUD
  - [x] adding comments requires a login
- Use CSS to style QuestionDetail

### Phase 6: Topics (1.5 days, W2 Th 12pm)

**Objective:** Questions can be tagged with multiple Topics.

- [x] create `Topic` model and `TopicTagging` join table
- build out API, Flux loop, and components for:
  - [x] fetching TopicTags for questions
  - [x] adding TopicTags to questions
  - [x] creating TopicTags
  - [x] searching questions by TopicTags
- [x] Style new elements for filtered QuestionIndex (by topic)

### Phase 7: Rich Text Formatting (1.5 day, W2 F 6pm)

**objective:** Enable complex styling of answers.

- [x] Integrate rich text formatting (`react-quill` based on Quill.js looks great).
- [x] Use Rails helpers to sanitize HTML before rendering.
- [x] Style the new AnswerForm.

### Bonus Features (TBD)
- [ ] User status of healthcare provider + visual distinction in answers
- [ ] Support groups for private questions
- [ ] Pagination / infinite scroll for Questions Index
- [x] Responsive layout
- [ ] Search by question text

:bug: asking question when not signed in

:beetle: posting comment with no text in it
