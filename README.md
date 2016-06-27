# XXXXX
[Heroku link](https://www.heroku.com)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
XXXXX is a web application (inspired by Quora) that will be built using Ruby on Rails and React.js. The concept is an online support-group for caregivers. By the end of week 9, this app, will, at a minimum, satisfy the following critera:
FresherNote is a web application inspired by Evernote that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Minimum necessary features:
  - [ ] Questions
  - [ ] Answers for questions / comments on answers
  - [ ] Search for Questions
  - [ ] Topics / tags
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] Adequate CSS styling

## Product Goals and Priorities
XXXXX will allow users to do the following:
- [ ] Create an account
- [ ] Log in / out (with demo user)
- [ ] Ask (create), read (all), answer (all), edit (own) and delete (own) questions
- [ ] Comment on answers and questions
- [ ] View feeds of questions filtered by topic
- [ ] Tag owned questions with Topics
- [ ] Search with dropdown of previously asked questions

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

### Phase 1: Backend setup and Front End User Authentication (0.5 days, W1 Tu 12pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
  - [ ] Multiple sessions
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Questions Model, API, and basic APIUtil (1.5 days, W1 Wed 6pm)

**Objective:** Questions can be created, read, edited and destroyed through
the API.

- [ ] create `Questions` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for questions (`QuestionsController`)
- [ ] jBuilder views for questions
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 12pm)

**Objective:** Questions can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `QuestionsIndex`
  - [ ] `QuestionIndexItem`
  - [ ] `NewQuestionForm`
  - [ ] `EditQuestionForm`
- [ ] save Questions to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 F 6pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] decide on color palette and logo
- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Answers (1 day, W2 M 6pm)

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

### Phase 6: TopicTags (1.5 days, W2 W 6pm)

**Objective:** Questions can be tagged with multiple TopicTags.

- [ ] create `Topic` model and `TopicTagging` join table
- build out API, Flux loop, and components for:
  - [ ] fetching TopicTags for questions
  - [ ] adding TopicTags to questions
  - [ ] creating TopicTags while adding to questions
  - [ ] searching questions by TopicTags
- [ ] Style new elements for filtered QuestionIndex (by topic)

### Phase 7: Allow Complex Styling in Questions (0.5 days, W2 Th 12pm)

**objective:** Enable complex styling of answers.

- [ ] Integrate rich text formatting (`react-quill` based on Quill.js looks great).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new AnswerForm.

### Phase 8: Allow Complex Styling in Questions (0.5 days, W2 Th 6pm)

**objective:** Enable question searches.

- [ ] Create searchResult dropdown component that responds to question input
- [ ] Limit to 5 results
- [ ] Search button to display all search results
- [ ] Style new elements in filtered QuestionIndex

### Phase 9: Search Previously Asked Questions (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and professional.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add transitions, custom svg's and other styling flourishes.

### Bonus Features (TBD)
- [ ] User status of healthcare provider + visual distinction in answers
- [ ] Pagination / infinite scroll for Questions Index
- [ ] Support groups for private questions
- [ ] Responsive layout
