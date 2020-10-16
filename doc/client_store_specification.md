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
    signUpInfo: {
        teamName: null,
        roomId: null,
        isStarted: false    
    },
    questionInfo: {
        teamAnswer: null,
        question: null,
        correctAnswer: null,
        questionNumber: 0
    },
    score: {
        teamScore: 0,
    }
    roundNumber {
        roundNumber: 0,
    }
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
    quizInfo: {
        quizName: null,
        roomId: null,
        teamNames: [null],
        categories: [null],
        isStarted: false
    },
    question: {
        question: null,
        questions: [null],
        correctAnswer: null,
        questionNumber: 0
    },
    answers: {
        teamAnswers: [{
            teamName: null, 
            value: null, 
            correctness: false
        }]
    }
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

