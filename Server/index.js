const express       = require('express');
const ws            = require('ws');
const http          = require('http');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const mongoose = require('mongoose');

const app               = express();
const httpServer        = http.createServer();
const webSocketServer   = new ws.Server({
    server: httpServer,
    path: "/websocket"
})

const dbName = 'quizzer';

const gameRouter = require('./routes/game');
const questionsRouter = require('./routes/questions');
const teamRouter = require('./routes/teams'); 
const routeRouter = require('./routes/rounds'); 

app.use(cors());
app.use(bodyParser.json());

app.use('/', gameRouter)
app.use('/', questionsRouter);
app.use('/', teamRouter);
app.use('/', routeRouter);


webSocketServer.on('connection', (websocket) => {
    console.log("Websocket connection created");

    websocket.on('message', (message) => {
        let messageObject = JSON.parse(message);
        console.log(messageObject);
        switch(messageObject.type)
        {
            case "IDENTIFY":
                {
                    websocket.roomId = messageObject.roomId;
                    websocket.role = messageObject.role;
                    if(messageObject.role == "TEAM")
                    {
                        websocket.teamName = messageObject.teamName;
                    }
                    console.log("roomId ", websocket.roomId, "role: ", websocket.role);
                    break;
                }
            default:
                {
                    console.log("Unhandled websocket message");
                }
        }
    });

    websocket.on('close', () => {
        console.log("Websocket connection closed to", websocket.role, " " ,  websocket.teamName ? websocket.teamName : "", "in room: ", websocket.roomId);
        if(websocket.role === "MASTER")
        {
            console.log("Closing connection to clients in the room");
            webSocketServer.clients.forEach((client) => {
                if(client.roomId === websocket.roomId)
                {
                    client.close();
                }
            })
        }
    })
});

httpServer.on('request', app);
httpServer.listen(3010, () => {
    mongoose.connect(`mongodb://localhost:27017/${dbName}`,  {useNewUrlParser: true }, () => {
        console.log(`HTTP server started on port: 3010`);
    });
});

function getWebSocketServer()
{
    return webSocketServer;
}

exports.getWebSocketServer = getWebSocketServer;