## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * QuestionsIndex
    * Search / Ask
    * QuestionIndexItem
  * **QuestionDetail**
    * Answer
      * Comment
    * **AnswerFrom**
      * Tags / Topics

## Routes

* **component:** `App` **path:** `/`
  * **component:** `QuestionsIndex` **path:** question
    * **component:** `QuestionDetail` **path:** `questions/:questionId`
      * **component:** `QuestionAnswers` **path:** `answers`
