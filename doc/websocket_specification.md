# Websocket message specification
## Server -> Team

- NEXT_QUESTION
  - Notify to fetch the next quiz question.
```
{
    type: "NEXT_QUESTION"
}
```
- VALIDATE_ANSWER
  - Notify to fetch the answer to the last question and whether own answer was correct.
```
{
    type: "VALIDATE_ANSWER"
}
```
---

## Server -> Scoreboard
- NEXT_QUESTION
  - Notify to fetch the next question.
  - Notify to fetch how far into the round the game is.
```
{
    type: "NEXT_QUESTION"
}
```
- FETCH_ANSWERS
  - Notify to fetch which teams have answered after a team answers a question.
```
{
    type: "FETCH_ANSWERS"
}
```
- FETCH_SCORES
  - Notify to fetch the new scores for the scoreboard at the end of the round.
```
{
    type: "FETCH_SCORES"
}
```
- NEXT_ROUND
  - Go into the next round, increasing the round counter.
```
{
    type: "NEXT_ROUND"
}
```
---

## Server -> Master
- FETCH_ANSWERS
  - Notify that a team has entered a new answer.
```
{
    type: "FETCH_ANSWERS"
}
```
- FETCH_TEAMS
  - Notify to fetch the teams when a new team has joined the quiz.
```
{
    type: "FETCH_TEAMS"
}
```
- FETCH_CATEGORIES
  - Notify to fetch new categories to select from for the upcoming round.
```
{
    type: "FETCH_CATEGORIES"
}
```
- FETCH_QUESTIONS
  - Notify to fetch new questions for the next round.
```
{
    type: "FETCH_QUESTIONS"
}
```