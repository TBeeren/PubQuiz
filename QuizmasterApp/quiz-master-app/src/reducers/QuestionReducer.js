const initialState = {
  question: null,
  questions: [
    {
        question: "Question 1",
        questionNumber: 1,
    },
    { 
        question: "Question 2", 
        questionNumber: 2 
    },
  ],
  correctAnswer: null,
  questionNumber: 1,
};

export default function QuestionReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_QUESTION": {
        let newState = [];
        state.questions.forEach((item) => {
            newState.push(item);
        })
        newState.push({
            question: action.payload.question,
            questionNumber: action.payload.questionNumber
        })
        return {
            questions: newState
        };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        questionNumber: action.payload.questionNumber,
      };
    }
    default:
      return state;
  }
}
