## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **QuestionsIndex**
    * QuestionIndexItem
  * **QuestionDetail**
    * NewAnswerForm
    * EditAnswerForm
    * AnswerIndex
      * CommentList
        * CommentForm

  * NewUser (modal)
  * NewSession (modal)

## Routes

* **component:** `App` **path:** `/`
  * **component:** `QuestionsIndex` **path:** `questions`
  * **component:** `QuestionDetail` **path:** `questions/:questionId`
