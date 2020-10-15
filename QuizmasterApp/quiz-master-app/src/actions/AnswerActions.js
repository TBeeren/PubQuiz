export function ReceivedAnswerAction(teamAnswers){
    return {
        type: "RECEIVED_ANSWER",
        payload: teamAnswers
    }
}

export function ApproveAnswerAction(teamName, correctness){
    return {
        type: "APPROVE_ANSWER",
        payload: {
            teamName: teamName,
            correctness: correctness
        }
    }
}