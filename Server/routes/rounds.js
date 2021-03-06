// Router Name: roundRouter

// - POST /api/v1/games/:roomID/round/categories
// - POST /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/round
// - GET /api/v1/games/:roomID/rounds

const express = require("express");
const ws = require("../index");
const roundRouter = express.Router();
const mongoose = require("mongoose");

require("../models/question");
require("../models/game");
const Question = mongoose.model("Question");
const Game = mongoose.model("Game");

//Quizmaster posting what will be the next question
roundRouter.post("/api/v1/games/:roomID/round", async (req, res) => {
  try {
    if (req.body.roundProgression) {
      let roomInfo = await Game.findOne({ roomId: req.params.roomID });
      let questionsArray = roomInfo.questions;
      let lastQuestion = questionsArray[questionsArray.length - 1];
      let answers = lastQuestion.answers;

      for (var answer of answers) {
        if (answer.isCorrect) {
          await Game.findOneAndUpdate(
            { roomId: req.params.roomID },
            {
              $inc: { "teams.$[inner].roundScore": 1 },
            },
            {
              arrayFilters: [{ "inner.name": answer.teamName }],
            }
          );
        }
      }

      ws.getWebSocketServer().clients.forEach((client) => {
        if (client.roomId === req.params.roomID) {
          if (client.role === "TEAM") {
            client.send(
              JSON.stringify({
                type: "VALIDATE_ANSWER",
              })
            );
            client.send(
              JSON.stringify({
                type: "FETCH_SCORES"
              })
            );
          }
        }
        if (client.role === "SCOREBOARD") {
          client.send(
            JSON.stringify({
              type: "DISPLAY_ANSWERS",
            })
          );
        }
      });
      res.status(200).send();
    } else {
      Game.update(
        { roomId: req.params.roomID },
        {
          $addToSet: {
            questions: {
              question: req.body.questionId,
            },
          },
        }
      ).then((e) => {
        res.status(201).send({
          questionNumber: req.body.questionId,
        });
      });

      ws.getWebSocketServer().clients.forEach((client) => {
        if (client.roomId === req.params.roomID) {
          if (client.role === "TEAM" || client.role === "SCOREBOARD") {
            client.send(
              JSON.stringify({
                type: "NEXT_QUESTION",
                questionId: req.body.questionId,
              })
            );
          }
        }
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

// Quizmaster starts a new round
roundRouter.post("/api/v1/games/:roomID/round/categories", (req, res) => {
  console.log("Quizmaster starts a new round");
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
  ).then((_) => {
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

// Fetching the roundnumber
roundRouter.get("/api/v1/games/:roomID/round", async (req, res) => {
  let rounds = await Game.find({ roomId: req.params.roomID }, { rounds: 1 });
  rounds = rounds[0].rounds;
  res.status(200).json({
    roundNumber: rounds[rounds.length - 1].roundNumber,
  });
});

// End of the round, update scores
roundRouter.put("/api/v1/games/:roomID/round", async (req, res) => {
  let rounds = await Game.find({ roomId: req.params.roomID }, { rounds: 1 });
  rounds = rounds[0].rounds;
  if (rounds.length) {
    let teams = await Game.find({ roomId: req.params.roomID }, { teams: 1 });
    teams = teams[0].teams;
    teams.sort((teamA, teamB) => {
      return teamB.roundScore - teamA.roundScore;
    });

    for (let i = 0; i < teams.length; i++) {
      let points = 0;
      switch (i) {
        case 0: {
          points = 4;
          break;
        }
        case 1: {
          points = 2;
          break;
        }
        case 2: {
          points = 1;
          break;
        }
        default: {
          points = 0.1;
          break;
        }
      }

      await Game.findOneAndUpdate(
        { roomId: req.params.roomID },
        {
          $inc: { "teams.$[inner].score": points },
        },
        {
          arrayFilters: [{ "inner.name": teams[i].name }],
        }
      );
    }

    teams.forEach(async (team) => {
      await Game.findOneAndUpdate(
        { roomId: req.params.roomID },
        {
          $set: { "teams.$[inner].roundScore": 0 },
        },
        {
          arrayFilters: [{ "inner.name": team.name }],
        }
      );
    });
  }
  
  ws.getWebSocketServer().clients.forEach((client) => {
  if (client.roomId === req.params.roomID) {
    client.send(
      JSON.stringify({
        type: "FETCH_SCORES",
      })
    );
  }
  })
});

// Quizmaster asks for all categories for the next round
roundRouter.get("/api/v1/games/:roomID/categories", async (req, res) => {
  if(req.params.roomID.length === 0 || !req.params.roomID){
    res.status(400).json('Bad Request');
  }

  let language = await Game.find({roomId: req.params.roomID},{language: 1});
  language = language[0].language;
  Question.find({language: language})
    .distinct("category")
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });
  givePoints = true;
});

// Fetching all questions based on the category
roundRouter.get("/api/v1/games/:roomID/:round/questions", async (req, res) => {
  let categoriesList = [];

  if(req.params.roomID.length === 0 || 
    !req.params.roomID){
    res.status(400).json('Bad Request');
  }

  // Find round of team by roomID
  await Game.find(
    { roomId: req.params.roomID },
    { rounds: { $elemMatch: { roundNumber: req.params.round } } }
  )
    .limit(1)
    .then((res) => {
      categoriesList = res[0].rounds[res[0].rounds.length - 1].categories;
      roundNumber = res[0].rounds[res[0].rounds.length - 1].roundNumber;
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });

  // Find questions that have been answered
  let answeredQuestions = [];
  await Game.find({ roomId: req.params.roomID }, { questions: 1 })
    .then((res) => {
      answeredQuestions = res.map((item, i) => {
        return item.question;
      });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(404).json("Query went wrong, please try again.");
    });

  // Find 5 questions based on the categories
  let language = await Game.find({roomId: req.params.roomID},{language: 1});
  language = language[0].language;
  Question.aggregate([
    { $sample: { size: 300 } },
    {
      $match: {
        $or: [
          { category: categoriesList[0] },
          { category: categoriesList[1] },
          { category: categoriesList[2] }, 
          { category: categoriesList[3] },
          { category: categoriesList[4] },
        ],
        _id: { $nin: answeredQuestions },
        language: language
      },
    },
  ])
    .limit(5)
    .then((question) => {
      res.status(200).json(question);
    });
});

module.exports = roundRouter;
