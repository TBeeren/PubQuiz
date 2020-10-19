const initialState = {
  question: null,
  questions: [
    {
      question: "Question 1",
      questionNumber: 1,
    },
    {
      question: "Question 2",
      questionNumber: 2,
    },
  ],
  correctAnswer: null,
  questionNumber: 1,
};

export default function QuestionReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_QUESTION": {
      return {
        ...state,
        questions: action.payload.questions,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        questionNumber: action.payload.questionNumber,
      };
    }
    case "ADD_QUESTION": {
      return {
        ...state,
        question: action.payload.question,
        questionNumber: action.payload.questionNumber,
      }
    }
    default:
      return state;
  }
}
