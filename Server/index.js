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
                    websocket.teamName = messageObject.teamName;
                    websocket.role = messageObject.role;
                    break;
                }
            default:
                {
                    console.log("Unhandled websocket message");
                }
        }
    });

    websocket.on('close', () => {
        console.log("Websocket connection closed");
    })
});

httpServer.on('request', app);
httpServer.listen(3001, () => {
    mongoose.connect(`mongodb://localhost:27017/${dbName}`,  {useNewUrlParser: true }, () => {
        console.log(`HTTP server started on port: 3001`);
    });
});

function getWebSocketServer()
{
    return webSocketServer;
}

exports.getWebSocketServer = getWebSocketServer;