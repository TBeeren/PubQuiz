const initialState = { 
    teamAnswer: null,
    question: null,
    correctAnswer: null,
    questionNumber: 0
}

export default function QuestionInfoReducer(state = initialState, action)
{
    switch (action.type) {
        case "NEW_QUESTION":
            {
                return{
                    ...state,
                    question: action.payload.question,
                    questionNumber: action.payload.questionNumber
                }
            }
        case "ANSWER_SUBMITTED":
            {
                return{
                    ...state,
                    teamAnswer: action.payload
                }
            }
        case "ANSWER_RECEIVED":
            {
                return{
                    ...state,
                    correctAnswer: action.payload
                }
            }
        default:
            return state;
    }
}  