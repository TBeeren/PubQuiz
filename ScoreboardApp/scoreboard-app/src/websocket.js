import {fetchScores, fetchAnsweredTeams} from './actions/TeamsActions'
import {fetchNewQuestion} from './actions/QuestionActions'
import {fetchRoundNumber} from "./actions/RoundActions"

const websocketAddress = "ws://localhost:3001/websocket"
let ws;
let globalStore;

export function openSocket(store, history, roomId) {
  globalStore = store;
  ws = new WebSocket(websocketAddress);

  ws.onopen = function (message) {
    console.log("Websocket Connection opened")
    ws.send(JSON.stringify({type: "IDENTIFY", roomId: roomId, role: "SCOREBOARD"}));
  };

  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);

    switch (data.type) {
      case "FETCH_SCORES":
          {
            globalStore.dispatch(fetchScores(globalStore.getState().signInInfo.roomId));
            globalStore.dispatch(fetchRoundNumber(globalStore.getState().signInInfo.roomId));
            history.push("/intermission");
            break;
          }
      case "NEXT_QUESTION":
        {
          globalStore.dispatch(fetchNewQuestion(globalStore.getState().signInInfo.roomId, data.questionId));
          globalStore.dispatch(fetchRoundNumber(globalStore.getState().signInInfo.roomId));
          history.push("/question");
          break;
        }
      case "FETCH_ANSWERED_TEAMS":
        {
          globalStore.dispatch(fetchAnsweredTeams(globalStore.getState().signInInfo.roomId, globalStore.getState().questionInfo.questionId));
        }
      default:
          {
              console.log("Unexpected message received through ws");
          }
  }
  };
  
  return ws;
}

export function getWebSocket() {
  if (ws) {
    return ws;
  } else {
    throw new Error("The websocket has not been opened yet.");
  }
}