const express = require('express');
const registerUser = require('../controllers/registerUser');
const checkEmail = require('../controllers/checkEmail');
const checkPassword = require('../controllers/checkPassword');
const userDetails = require('../controllers/userDetails');


const router = express.Router()

// Create user api
router.post('/register',registerUser)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/user-details',userDetails)

module.exports = router;