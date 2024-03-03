var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')
const middleware = require('../middleware')

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  usersCtrl.show
)

module.exports = router
