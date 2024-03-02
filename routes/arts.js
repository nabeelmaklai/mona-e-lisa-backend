const express = require('express')
const router = express.Router()
const artsCtrl = require('../controllers/arts')

router.post('/arts', artsCtrl.createArt)
router.post('/arts/:id/comments', artsCtrl.addComment)
router.get('/arts/:id', artsCtrl.show)
router.get('/arts', artsCtrl.index)

module.exports = router
