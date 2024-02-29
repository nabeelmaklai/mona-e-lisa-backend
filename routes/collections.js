const express = require('express')
const router = express.Router()
collectionsCtrl = require('../controllers/collections')

router.post('/collections', collectionsCtrl.createArt)
router.get('/collections/:id', collectionsCtrl.show)
router.put('/collections/:id', collectionsCtrl.update)

module.exports = router
