const express = require('express');
const questionRouter = express.Router();
const{websocketServer} = require('../index');

questionRouter.get("/test", (req, res) => {
    console.log(req);
    res.json({message: "Why hello there"});
});

//TeamApp submitting answer to question
questionRouter.post("/api/v1/games/:roomId/questions/:questionId/answer", (req, res) => {
    console.log("TeamApp submitting answer to question", req.body);
});

//TeamApp resubmitting answer to a question
questionRouter.put("/api/v1/games/:roomId/questions/:questionId/answer", (req, res) => {
    console.log(req.body);
});

//TeamApp requesting the next question
questionRouter.get("/api/v1/games/:roomId/questions/:questionId", (req, res) => {
    console.log("TeamApp requesting the next question");
    res.status(200).json({
        question: "Hoeveel tenen heeft Donald Trump op zondagmorgen?",
        questionNumber: 1
    });
});

//TeamApp requesting the answer to a question and whether their answer was correct
questionRouter.get("/api/v1/games/:roomId/questions/:questionId/answers/:answerId", (req, res) => {
    console.log("TeamApp requesting the answer to a question and whether their answer was correct");
    res.status(200).json({
        answer: "11",
        isCorrect: true
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