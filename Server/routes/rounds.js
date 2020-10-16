// Router Name: roundRouter

// - POST /api/v1/games/:roomID/round/categories
// - POST /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/rounds
// - GET /api/v1/games/:roomID/round/questions
// - GET /api/v1/games/:roomID/categories

const express = require('express');
const ws = require('../index');
const roundRouter = express.Router();

//Quizmaster posting what will be the next question
roundRouter.post("/api/v1/games/:roomID/round", (req, res) => {
    console.log(`Quizmaster of room ${req.params.roomID} selected question: ${req.body.question}`);
    console.log(ws.getWebSocketServer().clients);
    ws.getWebSocketServer().clients.forEach((client) => {
        if(client.role = "TEAM")
        {
            client.send(JSON.stringify({type: "NEXT_QUESTION"}));
        }
    })
    res.json({message: "Why hello there"});
});

module.exports = roundRouter;