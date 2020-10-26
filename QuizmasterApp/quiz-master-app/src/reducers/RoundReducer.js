const initialState = {
  rounds: [
    {
      roundNumber: 0,
      categories: [],
    },
  ],
  questionNumber: 10
};

export default function RoundReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_ROUND": {
      return {
        ...state,
        rounds: action.payload.rounds,
      };
    }
    case "UPDATE_QUESTION": {
      return {
          ...state,
          questionNumber: action.payload
      }
    }
    default:
      return state;
  }
}
