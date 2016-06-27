# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

flux cycle for question get requests:
![flux]

## Question Cycles

### Questions API Request Actions

* `fetchAllQuestions`
  0. invoked from `QuestionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/questions` is called.
  0. `receiveAllQuestions` is set as the callback.

* `createQuestion`
  0. invoked from `App`'s ask button `onClick`
  0. `POST /api/questions` is called.
  0. `receiveQuestion` is set as the callback.

* `fetchQuestion`
  0. invoked from `QuestionDetail` `didMount`/`willReceiveProps`
  0. `GET /api/questions/:id` is called.
  0. `receiveQuestion` is set as the callback.

* `updateQuestion`
  0. invoked from `QuestionDetail` `onSubmit`
  0. `POST /api/questions/:questionId` is called.
  0. `receiveQuestion` is set as the callback.

* `destroyQuestion`
  0. invoked from `QuestionDetail` delete question button `onClick`
  0. `DELETE /api/question/:questionId` is called.
  0. `removeQuestion` is set as the callback.

### Question API Response Actions

* `receiveAllQuestions`
  0. invoked from an API callback.
  0. `Question` store updates `_questions` and emits change.

* `receiveQuestion`
  0. invoked from an API callback.
  0. `Question` store updates `_questions[questionId]` and emits change.

* `removeQuestion`
  0. invoked from an API callback.
  0. `Question` store removes `_questions[questionId]` and emits change.

### Store Listeners

* `QuestionsIndex` component listens to `Question` store.
* `QuestionDetail` component listens to `Question` store.


## Answer Cycles

### Answer API Request Actions

* `createAnswer`
  0. invoked from new answer button `onClick`
  0. `POST /api/questions/:questionId/answers` is called.
  0. `receiveQuestion` is set as the callback.

* `updateAnswer`
  0. invoked from `AnswerDetail` `onSubmit`
  0. `POST /api/questions/:questionId/answers/:answerId` is called.
  0. `receiveQuestion` is set as the callback.

* `destroyAnswer`
  0. invoked from delete answer button `onClick`
  0. `DELETE /api/questions/:questionId/answers/:answerId` is called.
  0. `receiveQuestion` is set as the callback.

### Answer API Response Actions

* see Question API Response Actions above

### Store Listeners

* see Question Store Listeners above


## Topic Cycles

### Topic API Request Actions

* `getTopics`
  0. invoked from `QuestionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/topics` is called.
  0. `receiveAllTopics` is set as the callback.

### Answer API Response Actions

* `receiveAllTopics`
  0. invoked from an API callback.
  0. `Topic` store updates `_topics` and emits change.

### Store Listeners

* `QuestionsIndex` component listens to `Topic` store.


## Comment Cycles

### Comment API Request Actions

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/questions/:questionId/answers/:answerId/comments` is called.
  0. `receiveQuestion` is set as the callback.

* `destroyComment`
  0. invoked from delete answer button `onClick`
  0. `DELETE /api/questions/:questionId/answers/:answerId/comments/:commentId` is called.
  0. `receiveQuestion` is set as the callback.

### Answer API Response Actions

* see Question API Response Actions above

### Store Listeners

* see Question Store Listeners above


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `QuestionSearchBar` `onChange` when there is text
  0. `GET /api/questions` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `QuestionSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.



[flux]: ./flux.png
