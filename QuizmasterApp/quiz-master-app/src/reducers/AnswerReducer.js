const initialState = {
    teamAnswers: [{
        teamName: "", 
        value: null, 
        correctness: false
    }]
}

export default function AnswerReducer(state = initialState, action){
    switch (action.type) {
        case "RECEIVED_ANSWER":
        {
            return {
                ...state,
                teamAnswers: action.payload.teamAnswers
            }
        }
        case "APPROVE_ANSWER":
        {
            let newState = [];
            state.teamAnswers.forEach((item) => {
                if(item.teamName === action.payload.teamName){
                    item.correctness = action.payload.correctness;
                }
                newState.push(item);
            })
            return {
                teamAnswers: newState
            };
        }
        case "SUBMITTED_ANSWER":
        {
            return({
                ...state,
                teamAnswers: action.payload
            })
        }

        case "ADD_QUESTION":
        {
            return(initialState);
        }
        default:
        return state
    }
}
