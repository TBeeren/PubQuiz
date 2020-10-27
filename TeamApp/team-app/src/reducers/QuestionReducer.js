const initialState = { 
    question: null,
    questionId: -1,
    questionNumber: 0,
    teamAnswer: "",
    answerId: 0,
    correctAnswer: null,
    isCorrect: null,
    isResubmit: false
}

export default function QuestionInfoReducer(state = initialState, action)
{
    switch (action.type) {
        case "ANSWER_CHANGED":
            {
                return{
                    ...state,
                    teamAnswer: action.payload
                }
            }
        case "NEW_QUESTION":
            {
                return{
                    ...state,
                    question: action.payload.question,
                    questionId: action.payload.questionId,
                    teamAnswer: "",
                    questionNumber: action.payload.questionNumber,
                    isResubmit: false
                }
            }
        case "ANSWER_SUBMITTED":
            {
                return{
                    ...state,
                    teamAnswer: action.payload.answer,
                    answerId: action.payload.answerId,
                    isCorrect: "pending"
                }
            }
        case "ANSWER_RECEIVED":
            {
                let correctness = action.payload.isCorrect ? "correct": "incorrect";
                return{
                    ...state,
                    correctAnswer: action.payload.answer,
                    isCorrect: correctness
                }
            }
        case "SET_RESUBMIT":
            {
                return{
                    ...state,
                    isResubmit: action.payload
                }
            }
        case "RESET":
            {
                return(initialState);
            }
        default:
            return state;
    }
}  