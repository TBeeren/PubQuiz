const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  _id: {
    type: ObjectID,
    required: true,
  },
  questionText: {
      type: String,
      required: true
  },
  answer: {
    type: String,
    required: true
  },
  category: {
      type: String,
      required: true
  }
});

const gameSchema = new mongoose.Schema({
    _id: {
        type: ObjectID,
        required: true
    },
    roomId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rounds: [{
        roundNumber: {
            type: Number,
            required: true
        },
        categories: {
            type: [String],
            required: true
        }
    }],
    questions: [{
        question: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },  
        answers: [{
            teamId: {
                type: ObjectID,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            }
        }]
    }],
    teams: [{
        _id: {
            type: ObjectID,
            required: true
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

const question = mongoose.Model("Question", questionSchema);
const game = mongoose.Model("Game", gameSchema);