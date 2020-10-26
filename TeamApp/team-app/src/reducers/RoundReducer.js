const initialState = { 
    roundNumber: 0
}

export default function RoundReducer(state = initialState, action)
{
    switch (action.type) {
        case "UPDATE_ROUND":
        {
            return{
                ...state,
                roundNumber: action.payload
            }
        }
        default:
            return state;
    }
}  