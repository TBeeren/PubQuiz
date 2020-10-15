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