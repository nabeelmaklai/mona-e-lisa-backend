const express = require('express')
const router = express.Router()
collectionsCtrl = require('../controllers/Collections')

router.post('/collections', collectionsCtrl.createCollection)
router.get('/collections/:id', collectionsCtrl.show)
router.put('/collections/:id', collectionsCtrl.update)

module.exports = router
