import { combineReducers } from 'redux'
import AnswerReducer from './AnswerReducer'
import QuestionReducer from './QuestionReducer'
import QuizReducer from './QuizReducer'
import RoundReducer from './RoundReducer'
import TeamReducer from './TeamReducer'

const rootReducer = combineReducers({
    quizInfo: QuizReducer,
    question: QuestionReducer,
    answers: AnswerReducer,
    round: RoundReducer,
    teamInfo: TeamReducer
});

export default rootReducer;