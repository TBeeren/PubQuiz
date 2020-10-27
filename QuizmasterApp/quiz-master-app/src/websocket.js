import { fetchTeam } from "./actions/QuizActions";
import {fetchTeamAnswers} from "./actions/AnswerActions"
import {fetchScores} from "./actions/TeamActions"

const websocketAddress = "ws://localhost:3010/websocket";
let ws;
let globalStore;

export function openSocket(store, history) {
  globalStore = store;
  ws = new WebSocket(websocketAddress);
  
  ws.onclose = function(message) {
    history.push("/");
  };
  
  ws.onopen = function (message) {
    identify(globalStore.getState().quizInfo.roomId)
    console.log("Websocket Connection opened");
  };
  
  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);
    
    switch (data.type) {
      case "FETCH_ANSWERS": {
        globalStore.dispatch(fetchTeamAnswers(globalStore.getState().quizInfo.roomId, globalStore.getState().question.questionNumber));
        break;
      }
      case "FETCH_TEAMS": {
        globalStore.dispatch(fetchTeam(globalStore.getState().quizInfo.roomId));
        break;
      }
      case "FETCH_SCORES": {
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

export async function identify(roomId){
ws.send(
  JSON.stringify({
    type: "IDENTIFY",
    roomId: roomId,
    role: "MASTER",
  })
  );
}
  
export function closeWebSocket(){
  ws.close();
}

export function getWebSocket() {
  if (ws) {
    return ws;
  } else {
    throw new Error("The websocket has not been opened yet.");
  }
}
  