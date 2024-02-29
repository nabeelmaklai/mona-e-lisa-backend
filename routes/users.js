var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')

router.get('/users/:id', usersCtrl.show)

module.exports = router
