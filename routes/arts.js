const express = require('express')
const router = express.Router()
artsCtrl = require('../controllers/arts')

router.post('/arts', artsCtrl.createArt)
router.get('/arts/:id', artsCtrl.show)
router.get('/arts', artsCtrl.index)

module.exports = router
