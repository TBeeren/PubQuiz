export function NewQuestionAction(question, number)
{
    return {
        type: "NEW_QUESTION",
        payload: {
            question: question,
            questionNumber: number
        }
    }
}
export function AnswerSubmittedAction(answer)
{
    return {
        type: "ANSWER_SUBMITTED",
        payload: answer
    }
}

export function AnswerReceivedAction(answer)
{
    return {
        type: "ANSWER_RECEIVED",
        payload: answer
    }
}