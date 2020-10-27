const initialState = {
  teams: [
    {
      name: null,
      score: 0,
    },
  ],
};

export default function TeamsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TEAMS": {
      return {
        ...state,
        teams: action.payload,
      };
    }
    default:
        return state;
  }
}

