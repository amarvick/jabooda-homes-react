const nodemailer = require('nodemailer')

var createTransport = function() {
    return nodemailer.createTransport({
        service: 'gmail',
        secure: false, // AM - we will need this once SSL is turned on 
        port: 25,
        auth: {
            // AM - you are logging in as you? Maybe we do not need this? Look in to...
            user: 'amarvick94@gmail.com',
            pass: require('../../config/keys').emailPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    })
}

// Register (permissions granted to CEO/high admin)
module.exports = function newUserRegistration(newUser) {
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