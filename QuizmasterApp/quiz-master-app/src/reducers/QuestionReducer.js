const initialState = {
    question: null,
    questions: ["Question 1", "Question 2"],
    correctAnswer: null,
    questionNumber: 1 
}

export default function QuestionReducer(state = initialState, action){
    switch (action.type) {
        case "NEW_QUESTION":
        {
            return{
                ...state,
                question: action.payload.question,
                questionNumber: action.payload.questionNumber
            }
        }
        case "NEXT_QUESTION":
            {
                return{
                    ...state,
                    questionNumber: action.payload.questionNumber
                }
            }
        default:
            return state
    }
}
