# Schema Information

![schema-chart]

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
answered    | boolean   | not null: default: false

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
conetent    | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references notebooks), indexed

## comments
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
author_id        | integer   | not null, foreign key (references users), indexed
commentable_id   | integer   | not null: foreign key (references questions), indexed
commentable_type | string    | not null: foreign key (references questions), indexed
content          | string    | not null

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique

## topic_taggins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed, unique [tag_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

[schema-chart]: ./schema_chart.png
