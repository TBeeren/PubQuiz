const initialState = {
    quizName: null,
    roomId: null,
    teamNames: [null],
    categories: [null],
    isStarted: false
}

export default function QuizReducer(state = initialState, action){
    switch (action.type) {
        case "CREATE_QUIZ":
        {
            return { 
                ...state,
                quizName: action.payload.quizName,
                roomId: action.payload.roomId
            }
        }
        case "RECEIVED_NEW_TEAM":
        {
            return { 
                ...state,
                teamNames: action.payload.teamNames
            }
        } 
        case "REMOVE_TEAM":
        {
            return { 
                ...state,
                teamNames: action.payload.teamNames
            }
        } 
        case "START_QUIZ":
        {
            return { 
                ...state,
                isStarted: action.payload.isStarted
            }
        } 
        default:
        return state;
    }
}