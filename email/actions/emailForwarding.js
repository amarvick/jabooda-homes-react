const nodemailer = require('nodemailer')
const express = require('express')
const app = express()
const router = express.Router()

const createTransport = require('./createTransport')

// New User Registration
function newUserRegistration(newUser) {
    console.log('new user')
    let transporter = createTransport()

    // Email parameters (AM - make in to separate file?)
    let Message = {
        from: `NEW USER REGISTRATION <${newUser.email}>`,
        to: 'amarvick94@gmail.com',
        subject: `Registration request from ${newUser.name}`,
        html: `${newUser.name} needs employee registration. Please click here to verify.`
    }

    console.log(Message)
    
    transporter.sendMail(Message, (error, info) => {
        if (error) {
            console.log(error)
            return error
        } else {
            console.log(info)
            return info
        }
    })  
}

// Sending in email via contact form
function sendEmailContactForm(letter) {
    console.log('attempting...')
    let transporter = createTransport()

    // Email parameters 
    let Message = {
        from: `${req.body.name} <${letter.email}>`,
        to: 'amarvick94@gmail.com',
        subject: `Inquiry from ${letter.name}: ${letter.subject}`,
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
}

function sendJobApplication(jobApp) {
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
            res.send(error)
            throw error
        }
        res.send(info)
        throw info
    })
}

// Register (permissions granted to CEO/high admin)
exports.newUserRegistration = newUserRegistration,
exports.sendEmailContactForm = sendEmailContactForm,
exports.sendJobApplication = sendJobApplication