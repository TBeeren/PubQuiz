const initialState = {
  question: null,
  questions: [
    {
      question: "",
      questionNumber: 1,
      correctAnswer: ""
    },
  ],
  correctAnswer: "",
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
        correctAnswer: action.payload.correctAnswer
      }
    }
    default:
      return state;
  }
}
