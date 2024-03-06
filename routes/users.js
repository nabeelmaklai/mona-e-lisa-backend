var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')
const middleware = require('../middleware')

router.get('/:id', usersCtrl.show)

router.get('/:id/collections', usersCtrl.getCollections)
router.put('/:id/follow', usersCtrl.follow)
router.put('/:id/unfollow', usersCtrl.unfollow)
router.get('/:id/following', usersCtrl.getFollowing)

module.exports = router
