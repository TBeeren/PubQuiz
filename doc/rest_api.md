# REST API Specification
## TeamApp
### Send
#### Sign up using room ID
**`POST`** `/api/v1/games/:roomID/teams`
##### Request
```
{
    name: String,
    language: String
}
```
##### Response
- **201 Created**
- **404 Not Found**
---
#### Submit answer to question
**`POST`** `/api/v1/games/:roomID/questions/:questionID/answer`
##### Request
```
{
    teamName: String,
    answer: String
}
```
##### Response
```
{
    answerId: Number
}
```
- **201 Created**
- **404 Not Found**
---
#### Resubmit answer
**`PUT`** `/api/v1/games/:roomID/questions/:questionID/answer`
##### Request
```
{
    teamName: String,
    answer: String
}
```
##### Response
```
{
    answerId: Number
}
```
- **200 OK**
---
### Receive
#### Question
**`GET`** `/api/v1/games/:roomID/questions/:questionID`
##### Request
None
##### Response
- **200 OK**
- **404 Not Found**
```
{
    question: String,
    questionNumber: Number
}
```
---
#### Answer to question / correctness of answer
**`GET`** `/api/v1/games/:roomID/questions/:questionID/answers/:teamName`
##### Request
None
##### Response
- **200 OK**
- **404 Not Found**
```
{
    answer: String,
    isCorrect: Boolean
}
```

---

## Scoreboard
### Send
None

---

### Receive
#### Question
**`GET`** `/api/v1/games/:roomID/questions/:questionID`
##### Request
None
##### Response
```
{
    question: String
}
```
---
#### Teams that answered
**`GET`** `/api/v1/games/:roomID/questions/:questionID/answers`
##### Request
None
##### Response
```
{
    teams: [
        {
            name: String,
            answer: String
        }
    ]
}
```
---
#### Team scores
**`GET`** `/api/v1/games/:roomID/teams`
##### Request
None
##### Response
```
{
    teams: [
        {
            name: String,
            score: Number
        }
    ]
}
```
---
#### Progress into round
**`GET`** `/api/v1/games/:roomID/round`
##### Request
None
##### Response
```
{
    roundProgression: Number
}
```
---
#### Round number
**`GET`** `/api/v1/games/:roomID/rounds`
##### Request
None
##### Response 
```
{
    roundNumber: Number
}
``` 
---

## QuizmasterApp
### Send
#### Create new quiz with name
**`POST`** `/api/v1/games`
##### Request
```
{
    name: String
}
```
##### Response
- **201 Created**
---

#### Kick team
**`DELETE`** `/api/v1/games/:roomID/teams/:teamID`
##### Request
None
##### Response
- **200 OK**
---
#### Start quiz
**`PUT`** `/api/v1/games/:roomID`
##### Request
```
{
    start: Boolean
}
```
##### Response

---
#### Category selection
**`POST`** `/api/v1/games/:roomID/round/categories`
##### Request
```
{
    categories: [CategoryID]
}
```
##### Response
---
#### Next question
**`POST`** `/api/v1/games/:roomID/round`
##### Request
```
{
    roundProgression: true,
    question: QuestionID
}
```
##### Response
---
#### Approve answer
**`PUT`** `/api/v1/games/:roomID/teams/:teamID/answer`
##### Request  
```
{
    correct: Boolean
}
```
##### Response

### Receive
---
#### Submitted answer
**`GET`** `/api/v1/games/:roomID/questions/:questionID/answers`
##### Request
None
##### Response
```
{
    answers: [
        {
            team: String,
            answer: String
        }
    ]
}
```
---
#### New team
**`GET`** `/api/v1/games/:roomID/teams`
##### Request
None
##### Response
```
{
    teams: [String]
}
```
---
#### Categories
**`GET`** `/api/v1/games/:roomID/categories`
##### Request
None
##### Response
```
{
    categories: [String]
}
```
---
#### Questions to select from
**`GET`** `/api/v1/games/:roomID/round/questions`
##### Request
None
##### Response
```
{
    questions: [
        questionId: Number,
        question: String
    ]
}
```