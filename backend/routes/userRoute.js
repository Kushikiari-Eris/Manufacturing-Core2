const userController = require('../controller/userController')
const express = require('express')
const router = express.Router()
const authorizeRole = require('../middleware/roleAuth.js')


router.post('/register', userController.registerCreation)
router.get('/register', userController.registerFindCreatedUser)
router.post('/login', userController.login)

router.get('/admin', authorizeRole(['admin']), (req, res) =>{
    res.json({ Message: "Welcome, Admin!" })
})

router.get('/home', authorizeRole(['admin', 'user']), (req, res) =>{
    res.json({ Message: "Welcome to Home!" })
})

module.exports = router

