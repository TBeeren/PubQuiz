const initialState = {
  rounds: [
    {
      roundNumber: 0,
      categories: [],
    },
  ],
  questionNumber: 0,
  roundNumber: 0
};

export default function RoundReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_ROUND": {
      let newState = [];
      state.rounds.forEach((item) => {
          newState.push(item);
      })
      newState.push(action.payload);
      return {
          ...state,
          rounds: newState,
          roundNumber: action.payload.roundNumber
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
