# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Questions

- `GET /api/questions`
  - Questions index/search
  - accepts `topic` query param to list questions by Topic
  - accepts `text` list questions that include text
  - accepts pagination params (if I get there)
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Answers

- `GET /api/questions/questionId/answers`
- `POST /api/questions/questionId/answers`
- `PATCH /api/questions/questionId/answers/:id`
- `DELETE /api/questions/questionId/answers/:id`

### Comments

- `GET /api/questions/questionId/answers`
- `POST /api/questions/questionId/answers`
- `PATCH /api/questions/questionId/answers/:id`
- `DELETE /api/questions/questionId/answers/:id`

### Topics

- A question's topics will be included in the question detail component
  - from `GET /api/questions/:id`
- `GET /api/topics`
  - includes query param for typeahead suggestions
- `POST /api/questions/:question_id/topic`: add tag to question by name
  - if topic doesn't already exist, it will be created
- `DELETE /api/questions/:question_id/tags/:topic`: remove topic from question by
  name
