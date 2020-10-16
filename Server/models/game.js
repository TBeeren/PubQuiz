const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    _id: {
        type: ObjectID
    },
    roomId: {
        type: Number
    },
    name: {
        type: String
    },
    isStarted: {
        type: Boolean
    },
    rounds: [{
        roundNumber: {
            type: Number
        },
        categories: {
            type: [String]
        }
    }],
    questions: [{
        question: { 
            type: Number,
            ref: 'Question'
        },  
        answers: [{
            teamName: {
                type: String
            },
            text: {
                type: String
            },
            isCorrect: {
                type: Boolean
            }
        }]
    }],
    teams: [{
        _id: {
            type: ObjectID
        },
        name: {
            type: String,
            required: true
        },
        roundScore: { 
            type: Number,
            required: true
        },
        score: { 
            type: Number,
            required: true
        }
    }]
});

const game = mongoose.model("Game", gameSchema);