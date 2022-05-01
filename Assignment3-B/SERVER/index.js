const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {mongoose} = require("./database.js");
var employeeController = require('./controllers/employeeController') ;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3200, () => console.log('Server started at port : 3200'));


app.use('/employees', employeeController);