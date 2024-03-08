var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')
const middleware = require('../middleware')

router.get('/:id', usersCtrl.show)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  usersCtrl.editBio
)

router.get('/:id/collections', usersCtrl.getCollections)
router.put(
  '/:id/follow',
  middleware.stripToken,
  middleware.verifyToken,
  usersCtrl.follow
)
router.put(
  '/:id/unfollow',
  middleware.stripToken,
  middleware.verifyToken,
  usersCtrl.unfollow
)
router.get('/:id/following', usersCtrl.getFollowing)

module.exports = router
