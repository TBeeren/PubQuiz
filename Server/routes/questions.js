const express = require('express');
const questionRouter = express.Router();
const mongoose = require('mongoose');

require('../models/question');
require('../models/game');

const Game = mongoose.model('Game');
const Question = mongoose.model('Question');

//TeamApp submitting answer to question
//teamName
//answer
questionRouter.post("/api/v1/games/:roomId/questions/:questionId/answer", async (req, res) => {
    console.log("TeamApp submitting answer to question", req.body);
    let question = await Question.findOne({_id: req.params.questionId}).exec();
    let isCorrect = req.body.answer == question.answer;

    await Game.findOneAndUpdate(
        {
            roomId: req.params.roomId
        },
        {
          $push: { "questions.$[inner].answers": {
                            teamName: req.body.teamName,
                            text: req.body.answer,
                            isCorrect: isCorrect
                    } 
                },
        },
        {
          arrayFilters: [{ "inner.question": req.params.questionId }],
          new: true
        }
      );
    res.status(201).json({});
});

//TeamApp resubmitting answer to a question
questionRouter.put("/api/v1/games/:roomId/questions/:questionId/answer", (req, res) => {
    console.log("team updating an answer", req.body);
});

//TeamApp requesting the next question
questionRouter.get("/api/v1/games/:roomId/questions/:questionId", async (req, res) => {
    console.log("TeamApp requesting the next question");
    const questionId = parseInt(req.params.questionId)

    let requestedQuestion = await Question.findOne({_id: questionId}).exec();

    res.status(200).json({
        question: requestedQuestion.questionText,
        questionId: requestedQuestion._id,
        //TODO give proper questionnumber
        questionNumber: 1
    });
});

//TeamApp requesting the answer to a question and whether their answer was correct
questionRouter.get("/api/v1/games/:roomId/questions/:questionId/answers/:teamName", async (req, res) => {
    console.log("TeamApp requesting the answer to a question and whether their answer was correct");
    let correctAnswer = await Question.findOne({_id: req.params.questionId}, {answer: 1});
    let gameQAs = await Game.findOne({
        roomId: req.params.roomId
    },
    {
        questions: 1
    });

    let teamEntry;
    gameQAs.questions.forEach((element)=>{
        if(element.question === parseInt(req.params.questionId))
        {
            teamEntry = element.answers;
        }
    })

    let finalAnswer
    for(let i = teamEntry.length - 1; i >= 0; i--)
    {
        if(teamEntry[i].teamName === req.params.teamName)
        {
            finalAnswer = teamEntry[i];
        }
    }
    
    res.status(200).json({
        answer: correctAnswer.answer,
        isCorrect: finalAnswer.isCorrect
    });
});

//QuizMaster asking for answers to all questions
questionRouter.get("/api/v1/games/:roomId/questions/:questionId/answers", (req, res) => {
    console.log("QuizMaster asking for answers to all questions");
    res.json({
        message: "goedzo"
    });
});

module.exports = questionRouter;