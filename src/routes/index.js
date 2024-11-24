const express = require('express');
const registerUser = require('../controllers/registerUser');
const checkEmail = require('../controllers/checkEmail');


const router = express.Router()

// Create user api
router.post('/register',registerUser)
router.post('/email',checkEmail)

module.exports = router;