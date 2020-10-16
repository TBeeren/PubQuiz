const initialState = {
  rounds: [
    {
      roundNumber: 0,
      categories: [],
    },
  ],
};

export default function RoundReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_ROUND": {
      return {
        ...state,
        rounds: action.payload.rounds,
      };
    }
    default:
      return state;
  }
}
