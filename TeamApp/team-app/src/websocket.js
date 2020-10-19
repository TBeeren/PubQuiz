import { fetchNewQuestion, validateAnswer} from "./actions/QuestionActions"

const websocketAddress = "ws://localhost:3001/websocket"
let ws;
let store;

export function openSocket(store, history ,teamName, roomId) {
  store = store;
  ws = new WebSocket(websocketAddress);

  ws.onopen = function (message) {
    console.log("Websocket Connection opened")
    ws.send(JSON.stringify({type: "IDENTIFY", teamName: teamName, roomId: roomId, role: "TEAM"}));
  };

  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);

    switch (data.type) {
        case "NEXT_QUESTION":
            {
                console.log("NEXT_QUESTION", data.questionId);
                store.dispatch(fetchNewQuestion(store.getState().signUpInfo.roomId, data.questionId));
                history.push("/question");
                break;
            }
        case "VALIDATE_ANSWER":
            {
                store.dispatch(validateAnswer(store.getState().signUpInfo.roomId, 
                                                store.getState().questionInfo.questionId, 
                                                store.getState().signUpInfo.teamName));
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