const express = require('express')
const router = express.Router()
const collectionsCtrl = require('../controllers/Collections')

router.post('/', collectionsCtrl.createCollection)
router.get('/collections/:id', collectionsCtrl.showCollections)
router.put('/collections/:id', collectionsCtrl.updateCollection)
router.put('/collections/:id/add', collectionsCtrl.add)

module.exports = router
