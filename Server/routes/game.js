// Router Name: gameRouter

const express = require("express");
const ws = require("../index");
const gameRouter = express.Router();
const mongoose = require("mongoose");
const { ObjectID } = require("bson");

require("../models/game");
const Game = mongoose.model("Game");

// Quizmaster creates a new quiz
gameRouter.post("/api/v1/games", (req, res) => {
  let roomIdAvailable = true;
  let roomId;

  do {
    roomId = ("" + Math.random()).substring(2, 8);
    Game.find({ roomId: roomId })
      .then((item) => {
        if (item.roomId === roomId) {
          roomIdAvailable = false;
        }
      })
      .catch((e) => {
        res.status(404).json("Query went wrong, please try again.");
      });
  } while (!roomIdAvailable);

  Game.create({
    _id: ObjectID(),
    roomId: roomId,
    name: req.body.name,
    isStarted: false,
  })
    .then((_) => {
      res.status(200).json({
        name: req.body.name,
        roomId: roomId,
      });
    })
    .catch((e) => {
      res.status(404).json("Query went wrong, please try again.");
    });
});

// Quizmaster starts quiz
gameRouter.put("/api/v1/games/:roomID", (req, res) => {
  Game.update({ roomId: req.params.roomID }, { isStarted: req.body.isStarted })
    .then((_) => {
      res.status(200).json({
        isStarted: req.body.isStarted,
        roomId: req.body.roomID
      });
    })
    .catch((e) => {
      res.status(404).json("Query went wrong, please try again.");
    });
});

module.exports = gameRouter;
