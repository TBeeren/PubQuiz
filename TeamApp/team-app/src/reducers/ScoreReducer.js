const initialState = { 
    teamScore: 0,
    roundScore: 0
}

export default function ScoreReducer(state = initialState, action)
{
    switch (action.type) {
        case "INCREMENT_ROUNDSCORE":
            {
                return({
                    ...state,
                    roundScore: (state.roundScore + action.payload)
                })
            }
        case "RESET_ROUND":
            {
                return({
                    ...state,
                    roundScore: 0
                })
            }
        case "INCREMENT_SCORE":
            {
                return({
                    ...state,
                    teamScore: (state.teamScore + action.payload)
                })
            }
        case "RESET":
            {
                return(initialState);
            }
        default:
            return state;
    }
}  