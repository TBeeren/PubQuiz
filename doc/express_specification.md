# Express Specification

## Routers
- Teams
- Questions
- Game

---

## Middleware
- bodyparser
- errorHandler

--- 

## Paths
### Post Requests 
- POST /api/v1/games/:roomID/teams
- POST /api/v1/games/:roomID/questions/:questionID/answer
- POST /api/v1/games
- POST /api/v1/games/:roomID/round/categories
- POST /api/v1/games/:roomID/round

### Put Requests
- PUT /api/v1/games/:roomID/questions/:questionID/answer
- PUT /api/v1/games/:roomID
- PUT /api/v1/games/:roomID/teams/:teamID/answer

### Get Requests
- GET /api/v1/games/:roomID/questions/:questionID
- GET /api/v1/games/:roomID/questions/:questionID/answers/:answerID
- GET /api/v1/games/:roomID/teams
- GET /api/v1/games/:roomID/round
- GET /api/v1/games/:roomID/rounds
- GET /api/v1/games/:roomID/questions/:questionID/answers
- GET /api/v1/games/:roomID/categories
- GET /api/v1/games/:roomID/round/questions

### Delete Requests
- DELETE /api/v1/games/:roomID/teams/:teamID

---






