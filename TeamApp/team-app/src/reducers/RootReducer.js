import {combineReducers} from 'redux'
import TeamReducer from './TeamReducer'

const rootReducer = combineReducers({
    team: TeamReducer
});

export default rootReducer;