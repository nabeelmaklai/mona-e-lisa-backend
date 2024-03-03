const express = require('express')
const router = express.Router()
const artsCtrl = require('../controllers/arts')
const middleware = require('../middleware')

router.post(
  '/arts',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.createArt
)
router.post('/arts/:id/comments', artsCtrl.addComment)
router.get('/arts/:id', artsCtrl.show)
router.get('/arts', artsCtrl.index)

module.exports = router
