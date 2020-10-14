const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const questionsRouter = require('./routes/questions'); 

app.use(cors());
app.use(bodyParser.json());

app.use('/', questionsRouter);

const server = app.listen(3001, () => {
    console.log(`REST server started on port: ${server.address().port}`);
});