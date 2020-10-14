import {Reducer} from 'redux'
import initialState from './initialState'

export default function TeamReducer(state = initialState, action)
{
    switch (action.type) {
        case "SIGN_UP_ACTION":
            {
                let newState = {
                    ...state,
                    teamName: action.payload.teamName,
                    roomId: action.payload.roomId
                }
                return newState;
            }
        default:
            return state;
    }
}