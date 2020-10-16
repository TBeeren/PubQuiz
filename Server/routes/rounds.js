// Router Name: roundRouter

// - POST /api/v1/games/:roomID/round/categories
// - POST /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/rounds

const express = require("express");
const ws = require("../index");
const roundRouter = express.Router();
const mongoose = require("mongoose");

require("../models/Question");
require("../models/game");
const Question = mongoose.model("Question");
const Game = mongoose.model("Game");

//Quizmaster posting what will be the next question
roundRouter.post("/api/v1/games/:roomID/round", (req, res) => {
  console.log(
    `Quizmaster of room ${req.params.roomID} selected question: ${req.body.question}`
  );
  console.log(ws.getWebSocketServer().clients);
  ws.getWebSocketServer().clients.forEach((client) => {
    if ((client.role = "TEAM")) {
      client.send(JSON.stringify({ type: "NEXT_QUESTION" }));
    }
  });
  res.json({ message: "Why hello there" });
});

// Quizmaster starts a new round
roundRouter.post("/api/v1/games/:roomID/round/categories", (req, res) => {
  Game.update(
    { roomId: req.params.roomID },
    {
      $addToSet: {
        rounds: {
          roundNumber: req.body.roundNumber,
          categories: req.body.categories,
        },
      },
    }
  )
    .then((_) => {
      res.status(200).json({
        roundNumber: req.body.roundNumber,
        categories: req.body.categories,
      });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });
});

// Quizmaster asks for all categories for the next round
roundRouter.get("/api/v1/games/:roomID/categories", (req, res) => {
  Question.find()
    .distinct("category")
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });
});

// Fetching all questions based on the category
roundRouter.get("/api/v1/games/:roomID/:round/questions", async (req, res) => {
  console.log(
    `Quizmaster asking for all questions on round ${req.params.round} in room: ${req.params.roomID}`
  );
  const nQuestionsToFetch = 5;
  let categoriesList = [];
  let roundNumber;

  await Game.find(
    { roomId: req.params.roomID },
    { rounds: { $elemMatch: { roundNumber: req.params.round } } }
  ).limit(1)
    .then((res) => {
      categoriesList = res[0].rounds[res[0].rounds.length - 1].categories;
      roundNumber = res[0].rounds[res[0].rounds.length - 1].roundNumber;
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });

  await Question.find(
    { $match: { $or: [ { category: categoriesList[0] }, { category: categoriesList[1] }, { category: categoriesList[2] }] }}
  ).limit(nQuestionsToFetch)
    .then((question) => {
      console.log(question);
      res.status(200).json(question);
    })
    .catch((e) => {
      res.status(404).json("Query went wrong, please try again.");
    });
});

module.exports = roundRouter;
