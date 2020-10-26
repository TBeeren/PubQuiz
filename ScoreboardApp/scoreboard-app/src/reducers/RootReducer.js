import {combineReducers} from 'redux'
import QuestionReducer from './QuestionReducer'
import RoundReducer from './RoundReducer'
import TeamsReducer from './TeamsReducer'
import SignInReducer from './SignInReducer'

const rootReducer = combineReducers({
    questionInfo: QuestionReducer,
    round: RoundReducer,
    teamsInfo: TeamsReducer,
    signInInfo: SignInReducer
});

export default rootReducer;