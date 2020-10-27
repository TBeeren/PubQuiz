const initialState = {
    question: null,
    questionId: 0,
    category: null,
    questionNumber: 0
}

export default function QuestionReducer(state = initialState, action)
{
    switch(action.type)
    {
        case "NEW_QUESTION":
        {
            return({
                ...state,
                question: action.payload.question,
                questionId: action.payload.questionId,
                category: action.payload.category,
                questionNumber: action.payload.questionNumber
            })
        }
        default:
        {
            break;
        }
    }
    return state;
}