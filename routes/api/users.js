const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

const User = require('../../models/usersdb')

// Register (permissions granted to CEO/high admin)
router.post('/register', (req, res) => {

    // Form Validation
    const { errors, isValid } = validateRegisterInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    // Check if email already exists
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" })
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            pending: true
        })

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err
                newUser.password = hash
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err)) // AM - could make in to modal?
            })
        })
    })
})

// Register a user who is in pending status so they are now active
router.post('/validate', (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email
    const password = req.body.password

    // Find user by email
    User.findOne({ email }).then(user => {
        console.log('finding user')
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found!" })
        }

        // If user has already been approved, no need to carry on
        if (!user.pending) {
            return res.status(404).json({ userpending: "User has already been approved." })
        }

        // AM - user is no longer pending. Will work on this later
        user.pending = false
    })


})

// Login
router.post('/login', (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email
    const password = req.body.password

    // Find user by email
    User.findOne({ email }).then(user => {
        console.log('finding user')
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found!" })
        }

        // If user has not yet been approved, fail the request
        if (user.pending) {
            return res.status(404).json({ userpending: "We're sorry, you have not yet been approved by an administrator or your account has been deactivated. For more information, please email your administrator." })
        }

        // Check the password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                }

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: 'Password is Incorrect' })
            }
        }).catch(err => {
            console.log(err)
        })
    })
})

module.exports = router