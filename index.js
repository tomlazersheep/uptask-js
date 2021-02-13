//Import express
const express = require('express');
//import routes from routes/index.js
const routes = require('./routes');
const path = require('path');
//import bodyParser library
const bodyParser = require('body-parser');

//Conect to DB
const db = require('./config/db');

//import models
require('./models/Proyecto');

db.sync().then(()=>console.log('ok')).catch((error)=>console.log('not ok', error));

//Create express app
const app = express();

//Set static files dir
app.use(express.static('static'));

//Use bodyParser to get post requests
app.use(bodyParser.urlencoded({extended: true}));

// Set PUG as template engine
app.set('view engine', 'pug');

// Set views dir (inside views)
app.set('views', path.join(__dirname, './views'))

//Set router to handle all requests
app.use('/', routes());

//Set port to 8080
app.listen(8080);

