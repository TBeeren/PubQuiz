const initialState = {
    quizName: null,
    roomId: null,
    teamNames: [null],
    categories: ["Category 1", "Category 2"],
    isStarted: false,
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
        case "NEW_CATEGORIES":
            {
                return {
                    ...state,
                    categories: action.payload.categories
                }
            }
        default:
            return state;
    }
}