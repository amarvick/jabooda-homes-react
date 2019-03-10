
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const app = express()
const router = express.Router()
const passport = require('passport')

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Body Parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// What's rendered on the browser
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// What's rendered on the browser
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})