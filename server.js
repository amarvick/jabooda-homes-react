const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3001

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/emailTemplate', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'emailAppReceived.html'));
});

// Creating the transporter for emails
var createTransport = function() {
    return nodemailer.createTransport({
        service: 'gmail',
        secure: false, // AM - we will need this once SSL is turned on 
        port: 25,
        auth: {
            // AM - you are logging in as you? Maybe we do not need this? Look in to...
            user: 'amarvick94@gmail.com',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        }
    })
}

// User sends an email via the 'Contact Us' page
app.post('/api/sendEmailform', (req, res) => {
    let transporter = createTransport()

    // Email parameters 
    let Message = {
        from: `${req.body.name} <${req.body.email}>`,
        to: 'amarvick94@gmail.com',
        subject: `Inquiry from ${req.body.name}: ${req.body.subject}`,
        html: `${req.body.message}`
    }
    
    transporter.sendMail(Message, (error, info) => {
        if (error) {
            console.log('Error in sending email. See details below...')
            console.log(error)
            res.send(error)
            throw error
        } else {
            console.log('Email successfully sent!')
            console.log(info)
            res.send(info)
            throw info
        }
    })
})

// User submits a job application
app.post('/api/submitApplication', (req, res) => {
    let transporter = createTransport()
    console.log(req.body.resume)

    // Email parameters 
    let Message = {
        from: `${req.body.name} <${req.body.email}>`,
        to: 'amarvick94@gmail.com',
        subject: `${req.body.jobTitle} Job Application - ${req.body.name}`,
        html: `${req.body.summary} ${req.body.resume}`,
        attachments: [
            {
                filename: req.body.resume,
                content: fs.createReadStream(req.body.resume)
                // path: fs.createReadStream(req.body.resume)
            }
        ]
    }
    
    transporter.sendMail(Message, (error, info) => {
        if (error) {
            console.log('Error in sending email. See details below...')
            console.log(error)
            res.send(error)
            throw error
        }
        console.log('Email successfully sent!')
        console.log(info)
        res.send(info)
        throw info
    })
})