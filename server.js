const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs')
const app = express()
const router = express.Router()

const Careers = require('./src/data/careersdb')
const Projects = require('./src/data/projectsdb')
const Staff = require('./src/data/staffdb')

const PORT = 80

// app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})

// Setting up MongoDB Database
const dbRoute = "mongodb://amarvick:bluekittycats999@ds141924.mlab.com:41924/jabooda"

// Connect back end code with DB
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

// Connect to DB
let db = mongoose.connection;
db.once("open", () => console.log('Connected to the Database'));

// Check if error in connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ------------------------------- Get data from MongoDB -------------------------------
var retrieveData = function(db, req, res) {
    db.find((err, data) => {
        if (err) return res.json({ success: false, error: err })

        console.log(data)
        return res.json({ success: true, data: data })
    })
}

// Get Careers
router.get('/getCareerData', (req, res) => {
    return retrieveData(Careers, req, res)
})

// Get Projects
router.get('/getProjectData', (req, res) => {
    return retrieveData(Projects, req, res)
})

// Get Staff
router.get('/getStaffData', (req, res) => {
    return retrieveData(Staff, req, res)
})



// ------------------------------- Updating content -------------------------------
var updateData = function(db, req, res) {
    const { id, update } = req.body;
    db.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    })
}

// Updating Careers
router.post("/updateCareerData", (req, res) => {
    return updateData(Careers, req, res)
})

// Updating Projects
router.post("/updateProjectData", (req, res) => {
    return updateData(Projects, req, res)
})

// Updating Staff
router.post("/updateStaffData", (req, res) => {
    return updateData(Staff, req, res)
})


// ------------------------------- Deleting content -------------------------------

// this is our delete method
// this method removes existing data in our database
var deleteData = function(db, req, res) {
    const { id } = req.body;
    db.findOneAndDelete(id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
};
  
// Updating Careers
router.post("/deleteCareerData", (req, res) => {
    return deleteData(Careers, req, res)
})

// Updating Projects
router.post("/deleteProjectData", (req, res) => {
    return deleteData(Projects, req, res)
})

// Updating Staff
router.post("/deleteStaffData", (req, res) => {
    return deleteData(Staff, req, res)
})

// ------------------------------- Creating content -------------------------------

  // this is our create methid
  // this method adds new data in our database
var createData = function(db, req, res) {
    let data = new db();
  
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
};

// Creating Careers
router.post("/createCareerData", (req, res) => {
    return createData(Careers, req, res)
})

// Creating Projects
router.post("/createProjectData", (req, res) => {
    return createData(Projects, req, res)
})

// Creating Staff
router.post("/createStaffData", (req, res) => {
    return createData(Staff, req, res)
})

// use /api for db requests
app.use("/api", router);

// What's rendered on the browser
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// AM - to get rid of later
app.get('/emailTemplate', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'emailAppReceived.html'));
});

// ------------------------------- Sending Emails -------------------------------

// Creating the transporter for emails
var createTransport = function() {
    return nodemailer.createTransport({
        service: 'gmail',
        secure: false, // AM - we will need this once SSL is turned on 
        port: 25,
        auth: {
            // AM - you are logging in as you? Maybe we do not need this? Look in to...
            user: 'amarvick94@gmail.com',
            pass: 'Nice try, freeloader! You aren\'t getting my email password...'
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