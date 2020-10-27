const initialState = {
    roomId: 0
}

export default function SignInReducer(state = initialState, action)
{
    switch (action.type)
    {
        case "CHANGE_ROOMID":
            {
                return({
                    ...state,
                    roomId: action.payload
                })
            }
        default:
        {
            break;
        }
    }
    return state;
}