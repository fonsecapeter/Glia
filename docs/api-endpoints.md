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
  - Notes index/search
  - accepts `tag_name` query param to list questions by tag
  - accepts `topic_name` query param to list questions by topic
  - accepts pagination params (if I get there)
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Answers

- `GET /api/questions/questionId/answers`
- `POST /api/questions/questionId/answers`
- `GET /api/questions/questionId/answers/:id`
- `PATCH /api/questions/questionId/answers/:id`
- `DELETE /api/questions/questionId/answers/:id`

### Tags

- A question's tags will be included in the question show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/questions/:question_id/tags`: add tag to question by name
  - if question doesn't already exist, it will be created
- `DELETE /api/questions/:question_id/tags/:tag_name`: remove tag from question by
  name

### Topics

- A question's tags will be included in the question show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/questions/:question_id/tags`: add tag to question by name
  - if question doesn't already exist, it will be created
- `DELETE /api/questions/:question_id/tags/:tag_name`: remove tag from question by
  name
