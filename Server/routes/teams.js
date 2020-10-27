// Router Name: teamRouter
const express = require("express");
const ws = require("../index");
const { ObjectID } = require("bson");
const mongoose = require("mongoose");

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
      if(client.roomId === req.params.roomID){
        if (client.role === "MASTER") {
          client.send(
            JSON.stringify({
              type: "FETCH_TEAMS",
            })
          );
        }
      }
    });

    //Notify Scoreboards
    ws.getWebSocketServer().clients.forEach((client) => {
      if(client.roomId === req.params.roomID)
      {
        if (client.role === "SCOREBOARD") {
          client.send(
            JSON.stringify({
              type: "FETCH_SCORES",
            })
          );
        }
      }
    });
  } catch (e) {
    console.log(e.message);
  }

  res.status(201).send();
});

//Quizmaster approving a teams answer
teamRouter.put(
  "/api/v1/games/:roomID/teams/:teamID/answer",
  async (req, res) => {
    try {
      await Game.findOneAndUpdate(
        {
          roomId: req.params.roomID,
        },
        {
          $set: {
            "questions.$[inner].answers.$[innerInner].isCorrect":
              req.body.correct,
          },
        },
        {
          arrayFilters: [
            { "inner.question": req.body.questionId },
            { "innerInner.teamName": req.params.teamID },
          ],
        }
      );
      res.status(200).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

//Scoreboard/ quizmaster requesting teams and their scores
teamRouter.get("/api/v1/games/:roomID/teams", (req, res) => {
  console.log("Scoreboard/ quizmaster requesting teams and their scores");
  Game.find({ roomId: req.params.roomID }, { teams: 1 }).then((teams) => {
    res.status(200).json(teams);
  });
});

//Team requesting own score
teamRouter.get("/api/v1/games/:roomID/teams/:teamName", async (req, res) => {
  console.log("Scoreboard/ quizmaster requesting teams and their scores");
  let teams = await Game.find({ roomId: req.params.roomID }, { teams: 1 });
  teams = teams[0].teams;
  let selectedTeam;
  teams.forEach((team) => {
    if(team.name === req.params.teamName)
    {
      selectedTeam = team;
    }
  })
  res.status(200).json(selectedTeam);
});

//Quizmaster kicking a team
teamRouter.delete("/api/v1/games/:roomID/teams/:teamID", (req, res) => {
  try {
    ws.getWebSocketServer().clients.forEach((client) => {
      if(client.roomId === req.params.roomID)
      {
        if (client.role === "TEAM") {
          if (client.teamName === req.params.teamID) {
            res.status(200).json(client.teamName);
            client.close();
          }
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
  ).catch((e) => {
      console.log("Error: ", e.message);
    });
});

module.exports = teamRouter;
