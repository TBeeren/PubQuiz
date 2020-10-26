// Router Name: teamRouter
const express = require("express");
const ws = require("../index");
const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const ws = require("../index");

const teamRouter = express.Router();
require("../models/game");

const Game = mongoose.model("Game");

//TeamApp signing up with room id
teamRouter.post("/api/v1/games/:roomID/teams", (req, res) => {
  console.log("TeamApp signing up with room id", req.body);
  Game.update(
    {
      roomId: req.params.roomID,
    },
    {
      $addToSet: {
        teams: {
          name: req.body.name,
          roundScore: 0,
          score: 0,
        },
      },
    },
    () => {}
  );

  try {
    //Notify Quizmaster
    ws.getWebSocketServer().clients.forEach((client) => {
      if (client.role === "MASTER") {
        console.log("Send fetch teams to master");
        client.send(
          JSON.stringify({
            type: "FETCH_TEAMS",
          })
        );
      }
    });

    //Notify Scoreboards
    ws.getWebSocketServer().clients.forEach((client) => {
      if (client.role === "SCOREBOARD") {
        client.send(
          JSON.stringify({
            type: "FETCH_SCORES",
          })
        );
      }
    });
  } catch (e) {
    console.log(e.message);
  }

  res.status(201).send();
});

//Quizmaster approving a teams answer
teamRouter.put("/api/v1/games/:roomID/teams/:teamID/answer", (req, res) => {
  console.log(req.body);
});

//Scoreboard/ quizmaster requesting teams and their scores
teamRouter.get("/api/v1/games/:roomID/teams", (req, res) => {
  console.log("TeamApp requesting the next question");
  Game.find({ roomId: req.params.roomID }, { teams: 1 }).then((teams) => {
    res.status(200).json(teams);
  });
});

//Quizmaster kicking a team
teamRouter.delete("/api/v1/games/:roomID/teams/:teamID", (req, res) => {
  try {
    ws.getWebSocketServer().clients.forEach((client) => {
      if (client.role === "TEAM") {
        if (client.teamName === req.params.teamID) {
          res.status(200).json(client.teamName);
          client.close();
        }
      }
    });
  } catch (e) {
    console.log(e.message);
    res.status(400).json("Bad Request");
  }

  Game.update(
    { roomId: req.params.roomID },
    { $pull: { teams: { name: req.params.teamID } } }
  )
    .then((res) => {
      console.log("Response: ", res);
    })
    .catch((e) => {
      console.log("Error: ", e.message);
    });
});

module.exports = teamRouter;
