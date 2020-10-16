const initialState = { 
    question: null,
    questionId: 0,
    questionNumber: 0,
    teamAnswer: null,
    answerId: 0,
    correctAnswer: null,
    isCorrect: null
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
                    questionNumber: action.payload.questionNumber
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
        default:
            return state;
    }
}  