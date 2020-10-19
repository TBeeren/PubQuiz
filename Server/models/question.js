const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const question = mongoose.model("Question", questionSchema);
