import {combineReducers} from 'redux'
import SignUpReducer from './SignUpReducer'
import QuestionInfoReducer from './QuestionReducer'
import ScoreReducer from './ScoreReducer'
import RoundReducer from './RoundReducer'

const rootReducer = combineReducers({
    signUpInfo: SignUpReducer,
    questionInfo: QuestionInfoReducer,
    score: ScoreReducer,
    roundNumber: RoundReducer
});

export default rootReducer;