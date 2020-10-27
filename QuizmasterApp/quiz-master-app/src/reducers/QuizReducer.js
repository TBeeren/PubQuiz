const initialState = {
  quizName: null,
  roomId: null,
  teamNames: [null],
  categories: [],
  isStarted: false,
};

export default function QuizReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_QUIZ": {
      return {
        ...state,
        quizName: action.payload.quizName,
        roomId: action.payload.roomId,
      };
    }
    case "RECEIVED_NEW_TEAM": {
      return {
        ...state,
        teamNames: action.payload.teamNames,
      };
    }
    case "REMOVE_TEAM": {
      let draft = [];
      for (var name of state.teamNames) {
        if (name !== action.payload) {
          draft.push(name);
        }
      }
      return {
        ...state,
        teamNames: draft,
      };
    }
    case "START_QUIZ": {
      return {
        ...state,
        isStarted: action.payload.isStarted,
      };
    }
    case "NEW_CATEGORIES": {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case "FETCH_TEAMS": {
      return {
        ...state,
        teamNames: action.payload,
      };
    }
    default:
      return state;
  }
}
