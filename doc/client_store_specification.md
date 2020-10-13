# Client store specification

## TeamApp
### Attributes
- teamName
- language
- roomId
- teamScore
- teamAnswer
- question
- correctAnswer
- questionNumber
- roundNumber
- isStarted

#### InitialState
```
{
    teamName: null,
    roomId: null,
    teamScore: 0,
    teamAnswer: null,
    question: null,
    correctAnswer: null,
    questionNumber: 0,
    roundNumber: 0,
    isStarted: false
}
```
---
## QuizmasterApp
### Attributes
- quizName
- roomId
- teamNames: [String]
- categories: [String]
- question
- questions: [String]
- questionNumber
- answers[{teamName: String, value, correctness}]
- correctAnswer
- isStarted

#### InitialState
```
{
    quizName: null,
    roomId: null,
    teamNames: [null],
    categories: [null],
    question: null,
    questions: [null],
    questionNumber: 0,
    answers: [{
        teamName: null, 
        value: null, 
        correctness: false
    }],
    correctAnswer: null,
    isStarted: false
}
```
---
## ScoreboardApp
### Attributes
- question
- category
- roundNumber
- questionNumber
- teams [name, score]
- answeredTeams: [name: string]
  
#### InitialState
```
{
    question: null, 
    category: null, 
    roundNumber: 0, 
    questionNumber: 0, 
    teams: [{
        name: null,
        score: 0
        }], 
    answeredTeams: [null] 
}
```

