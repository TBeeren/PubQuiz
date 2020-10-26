import { fetchTeam } from "./actions/QuizActions";

const websocketAddress = "ws://localhost:3001/websocket";
let ws;
let store;

export function openSocket(store, roomId) {
  store = store;
  ws = new WebSocket(websocketAddress);

  ws.onopen = function (message) {
    console.log("Websocket Connection opened");
    ws.send(
      JSON.stringify({
        type: "IDENTIFY",
        roomId: roomId,
        role: "MASTER",
      })
    );
  };

  ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    console.log("ws onmessage: ", data);

    switch (data.type) {
      case "FETCH_ANSWERS": {
        console.log("FETCH_ANSWERS");
        break;
      }
      case "FETCH_TEAMS": {
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
      default: {
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
