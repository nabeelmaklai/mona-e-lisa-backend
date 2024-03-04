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
router.put('/:id', artsCtrl.EditArtDetails)

router.get('/', artsCtrl.index)
router.delete('/:id/comments/:commentId', artsCtrl.deleteComment)
router.put('/:id/like', artsCtrl.like)
router.put('/:id/removelike', artsCtrl.removeLlike)

module.exports = router
