const initialState = {
    teamName: null,
    roomId: null,
    isStarted: false
}

export default function SignUpReducer(state = initialState, action)
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