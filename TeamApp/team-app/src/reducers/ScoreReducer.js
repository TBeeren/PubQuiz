const initialState = { 
    teamScore: 0
}

export default function ScoreReducer(state = initialState, action)
{
    switch (action.type) {
        case "UPDATE_SCORE":
            {
                return{
                    ...state,
                    teamScore: action.payload
                }
            }
        default:
            return state;
    }
}  