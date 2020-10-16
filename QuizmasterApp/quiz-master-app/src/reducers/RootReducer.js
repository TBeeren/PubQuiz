import { combineReducers } from 'redux'
import AnswerReducer from './AnswerReducer'
import QuestionReducer from './QuestionReducer'
import QuizReducer from './QuizReducer'
import RoundReducer from './RoundReducer'

const rootReducer = combineReducers({
    quizInfo: QuizReducer,
    question: QuestionReducer,
    answers: AnswerReducer,
    round: RoundReducer,
});

export default rootReducer;