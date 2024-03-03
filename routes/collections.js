const express = require('express')
const router = express.Router()
const collectionsCtrl = require('../controllers/Collections')

router.post('/', collectionsCtrl.createCollection)
router.get('/collections/:id', collectionsCtrl.showCollections)
router.put('/collections/:id', collectionsCtrl.updateCollection)

module.exports = router
