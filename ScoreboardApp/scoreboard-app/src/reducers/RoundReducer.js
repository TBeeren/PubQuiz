const initialState = {
  roundNumber: 0,
  isStarted: false,
};

export default function RoundReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ROUND": {
      return {
        ...state,
        roundNumber: action.payload,
        isStarted: true
      };
    }
  }
  return state;
}
