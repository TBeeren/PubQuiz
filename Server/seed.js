const mongoose = require('mongoose');
require('./models/question');
const promiseWrappers = require('./promise-wrappers.js');

const dbName = 'quizzer';

const db = mongoose.connection;

const Question = mongoose.model('Question');

mongoose.connect(`mongodb://localhost:27017/${dbName}`,  {useNewUrlParser: true } ).then(() => {
    return seedQuestion();
}).catch(err => {
    console.log(err);
}).then(() => {
    db.close();
});


async function seedQuestion() {
    await Question.deleteMany();
    let questions = await promiseWrappers.readFileP('seedData_EN.json');
    questions = await JSON.parse(questions);
    let questionsEnglish = questions.map((element, index) => {
        return {
            ...element,
            _id: index,
            language: "English"
        }
    });

    questions = await promiseWrappers.readFileP('seedData_NL.json');
    questions = await JSON.parse(questions);
    let questionsDutch = questions.map((element, index) => {
        return {
            ...element,
            _id: index + questionsEnglish.length,
            language: "Dutch"
        }
    });

    let allQuestions = [...questionsEnglish, ...questionsDutch]
    await Question.insertMany(
        allQuestions
    );
}