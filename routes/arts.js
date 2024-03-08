const express = require('express')
const router = express.Router()
const artsCtrl = require('../controllers/arts')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.createArt
)
router.post('/:id/comments', artsCtrl.addComment)
router.get('/:id', artsCtrl.show)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.EditArtDetails
)

router.get('/', artsCtrl.index)
router.delete(
  '/:id/comments/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.deleteComment
)
router.put(
  '/:id/like',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.like
)
router.put(
  '/:id/removelike',
  middleware.stripToken,
  middleware.verifyToken,
  artsCtrl.removeLlike
)

module.exports = router
