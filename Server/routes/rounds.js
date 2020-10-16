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
const mongoose = require('mongoose')
require('../models/question')
require('../models/game')

const Game = mongoose.model('Game');
const Question = mongoose.model('Question');

//Quizmaster posting what will be the next question
roundRouter.post("/api/v1/games/:roomID/round", async (req, res) => {
    console.log(`Quizmaster of room ${req.params.roomID} selected question: ${req.body.questionId}`);
    const questionId = req.body.questionId;

    let requestedQuestion = await Question.findOne({_id: questionId});

    await Game.updateOne({
        roomId: req.params.roomID
    },
    {
        $addToSet: {
            questions: {
                question: requestedQuestion._id,
            }
        }
    },() => {})
    ws.getWebSocketServer().clients.forEach((client) => {
        if(client.role = "TEAM")
        {
            client.send(JSON.stringify({
                type: "NEXT_QUESTION",
                questionId: questionId
            }));
        }
    })
    res.json({message: "Why hello there"});
});

module.exports = roundRouter;