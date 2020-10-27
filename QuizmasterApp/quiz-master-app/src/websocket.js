import { fetchTeam } from "./actions/QuizActions";
import {fetchTeamAnswers} from "./actions/AnswerActions"
import {fetchScores} from "./actions/TeamActions"

const websocketAddress = "ws://localhost:3001/websocket";
let ws;
let store;
let roomId;

export function openSocket(store) {
  store = store;
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
        store.dispatch(fetchTeamAnswers(store.getState().quizInfo.roomId, store.getState().question.questionNumber));
        break;
      }
      case "FETCH_TEAMS": {
        console.log("FETCH_TEAMS");
        store.dispatch(fetchTeam(store.getState().quizInfo.roomId));
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
        store.dispatch(fetchScores(store.getState().quizInfo.roomId));
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
  roomId = roomId;
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
