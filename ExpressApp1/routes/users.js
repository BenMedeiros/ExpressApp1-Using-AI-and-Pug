'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

// Serve the login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login submission
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // For demonstration, log the user in if the credentials are "user" and "pass"
    if (username === 'user' && password === 'pass') {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password. Please try again.');
    }
});

module.exports = router;
