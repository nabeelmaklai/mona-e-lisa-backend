const express = require('express')
const router = express.Router()
const collectionsCtrl = require('../controllers/Collections')

router.post('/', collectionsCtrl.createCollection)
router.get('/:id', collectionsCtrl.showCollections)
router.put('/:id', collectionsCtrl.updateCollection)
router.put('/:id/add', collectionsCtrl.add)

module.exports = router
