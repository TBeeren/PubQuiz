import { combineReducers } from 'redux'
import AnswerReducer from './AnswerReducer'
import QuestionReducer from './QuestionReducer'
import QuizReducer from './QuizReducer'

const rootReducer = combineReducers({
    quizInfo: QuizReducer,
    question: QuestionReducer,
    answers: AnswerReducer,
});

export default rootReducer;