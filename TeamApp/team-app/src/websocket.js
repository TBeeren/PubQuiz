import { fetchNewQuestion, validateAnswer} from "./actions/QuestionActions"
import {fetchScores} from "./actions/ScoreActions"


const websocketAddress = "ws://localhost:3010/websocket"
let ws;
let globalStore;

export function openSocket(store, history ,teamName, roomId) {
  globalStore = store;
  ws = new WebSocket(websocketAddress);
  
  ws.onopen = function (message) {
    console.log("Websocket Connection opened")
    ws.send(JSON.stringify({type: "IDENTIFY", teamName: teamName, roomId: roomId, role: "TEAM"}));
  };
  
  ws.onclose = function (message) {
    history.push("/");
  }
  
  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);
    
    switch (data.type) {
      case "NEXT_QUESTION":
      {
        globalStore.dispatch(fetchNewQuestion(globalStore.getState().signUpInfo.roomId, data.questionId));
        history.push("/question");
        break;
      }
      case "VALIDATE_ANSWER":
      {
        globalStore.dispatch(validateAnswer(globalStore.getState().signUpInfo.roomId, 
        globalStore.getState().questionInfo.questionId, 
        globalStore.getState().signUpInfo.teamName));
        break;
      }
      case "FETCH_SCORES":
      {
        globalStore.dispatch(fetchScores(globalStore.getState().signUpInfo.roomId,
        globalStore.getState().signUpInfo.teamName));
        break;
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