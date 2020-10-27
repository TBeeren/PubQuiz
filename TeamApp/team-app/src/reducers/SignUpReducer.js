const initialState = {
    teamName: null,
    roomId: null,
    isStarted: false,
    invalidName: false
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
        case "NEW_QUESTION":
            {
                return({
                    ...state,
                    isStarted: true
                })
            }
        case "RESET":
            {
                return({
                    ...initialState,
                    invalidName: state.invalidName
                });
            }
        case "INVALID_NAME":
            {
                return({
                    ...state,
                    invalidName: action.payload
                })
            }
        default:
            return state;
    }
}