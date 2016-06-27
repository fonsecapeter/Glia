## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **QuestionsIndex**
    * QuestionIndexItem
  * **QuestionDetail**
    * AnswerForm
    * AnswerIndex
      * CommentList
        * CommentForm

  * **NewUser**
  * **NewSession**

## Routes

* **component:** `App` **path:** `/`
  * **component:** `QuestionsIndex` **path:** `questions`
  * **component:** `QuestionDetail` **path:** `questions/:questionId`

  * **component:** `NewUser` **path:** `/sign_in`
  * **component:** `NewSession` **path:** `/sign_up`
