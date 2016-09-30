var
express = require('express'),
app = express(),
mongoose = require('mongoose'),
logger = require('morgan'),
bodyParser = require('body-parser')

//database connection
mongoose.connect('mongodb://localhost/characters', function(err) {
    if (err) {
        console.log("Problem connecting to Mongo")
    } else {
        console.log("Connected to Mongo!")
    }
})

app.use(logger('dev'))
app.use(bodyParser.json());

characterRoutes = require('./routes/character.js')
app.get('/', function(req, res) {
    res.json({
        message: "This is the character Routes"
    })
})

//to connect a router
app.use('/', characterRoutes)

app.listen(3000, function(err){
  console.log("Your logged into port 3000")
})
