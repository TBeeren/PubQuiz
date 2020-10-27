import { fetchTeam } from "./actions/QuizActions";
import {fetchTeamAnswers} from "./actions/AnswerActions"
import {fetchScores} from "./actions/TeamActions"

const websocketAddress = "ws://localhost:3001/websocket";
let ws;
let globalStore;

export function openSocket(store) {
  globalStore = store;
  ws = new WebSocket(websocketAddress);

  ws.onopen = function (message) {
    console.log("Websocket Connection opened");
  };

  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);

    switch (data.type) {
      case "FETCH_ANSWERS": {
        console.log("FETCH_ANSWERS");
        globalStore.dispatch(fetchTeamAnswers(globalStore.getState().quizInfo.roomId, globalStore.getState().question.questionNumber));
        break;
      }
      case "FETCH_TEAMS": {
        console.log("FETCH_TEAMS");
        globalStore.dispatch(fetchTeam(globalStore.getState().quizInfo.roomId));
        break;
      }
      case "FETCH_CATEGORIES": {
        console.log("FETCH_CATEGORIES");
        break;
      }
      case "FETCH_QUESTIONS": {
        console.log("FETCH_QUESTIONS");
        break;
      }
      case "FETCH_SCORES": {
        console.log("Fetch scores jongeuhsdf");
        globalStore.dispatch(fetchScores(globalStore.getState().quizInfo.roomId));
        break;
      }
      default: {
        console.log("Unexpected message received through ws");
      }
    }
  };

  return ws;
}

export function identify(roomId)
{
  ws.send(
    JSON.stringify({
      type: "IDENTIFY",
      roomId: roomId,
      role: "MASTER",
    })
  );
}

export function getWebSocket() {
  if (ws) {
    return ws;
  } else {
    throw new Error("The websocket has not been opened yet.");
  }
}
