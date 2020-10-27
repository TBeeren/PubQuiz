const initialState = {
  teams: [
    {
      name: null,
      score: 0,
    },
  ],
};

export default function TeamsReducer(state = initialState, action) {
    console.log("Hallo in de reducer: ", action.payload, action.type);
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

