## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * QuestionsIndex
    * QuestionIndexItem
  * **QuestionDetail**
    * AnswerForm
    * AnswerIndex
      * CommentList
        * CommentForm
    * **AnswerFrom**

## Routes

* **component:** `App` **path:** `/`
  * **component:** `QuestionsIndex` **path:** `questions`
  * **component:** `QuestionDetail` **path:** `questions/:questionId`
    * **component:** `QuestionAnswers` **path:** `answers`
