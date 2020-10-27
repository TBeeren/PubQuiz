const initialState = {
    teams: [{
        name: null,
        score: 0
    }],
    answeredTeams: [null]
}

export default function TeamsReducer(state = initialState, action)
{
    switch(action.type)
    {
        case "TEAMS_UPDATE":
        {
            return({
                ...state,
                teams: action.payload
            })
        }
        case "TEAM_ANSWERED":
        {
            return({
                ...state,
                answeredTeams: action.payload
            })
        }
        case "NEW_QUESTION":
        {
            return({
                ...state,
                answeredTeams: []
            })
        }
        default:
        {
            break;
        }
    }
    return state;
}