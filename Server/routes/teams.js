// Router Name: teamRouter
const express = require('express');
const { ObjectID } = require("bson");
const mongoose = require('mongoose');
const ws = require("../index");

const teamRouter = express.Router();
require('../models/game')

const Game = mongoose.model('Game');

//TeamApp signing up with room id
teamRouter.post("/api/v1/games/:roomID/teams", (req, res) => {
    console.log("TeamApp signing up with room id", req.body);
    Game.update({
        roomId: req.params.roomID
    },
    {
        $addToSet: {
            teams: {
                name: req.body.name,
                roundScore: 0,
                score: 0
            }
        }
    },() => {})

    //Notify scoreboards
    ws.getWebSocketServer().clients.forEach((client) => {
        if ((client.role === "SCOREBOARD")) {
          client.send(
            JSON.stringify({
              type: "FETCH_SCORES"
            })
          );
        }
      });

    res.status(201).send();
});

//Quizmaster approving a teams answer
teamRouter.put("/api/v1/games/:roomID/teams/:teamID/answer", (req, res) => {
    console.log(req.body);
});

//Scoreboard/ quizmaster requesting teams and their scores
teamRouter.get("/api/v1/games/:roomID/teams", (req, res) => {
    console.log("TeamApp requesting the next question");
    Game.find({roomId: req.params.roomID}, {teams: 1}).then((teams)=>{
        res.status(200).json(teams);
    });
});

//Quizmaster kicking a team
teamRouter.delete("/api/v1/games/:roomID/teams/:teamID", (req, res) => {
    console.log("TeamApp requesting the answer to a question and whether their answer was correct");
});

module.exports = teamRouter;

// Create a room for test purposes
// Game.create(
//     {
//         _id: ObjectID(),
//         roomId: 69,
//         name: "test"
//     }
// );