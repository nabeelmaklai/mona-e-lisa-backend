const express = require('express')
const router = express.Router()
const collectionsCtrl = require('../controllers/Collections')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  collectionsCtrl.createCollection
)
router.get('/:id', collectionsCtrl.showCollections)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  collectionsCtrl.updateCollection
)
router.put(
  '/:id/add',
  middleware.stripToken,
  middleware.verifyToken,
  collectionsCtrl.add
)
router.put(
  '/:id/remove',
  middleware.stripToken,
  middleware.verifyToken,
  collectionsCtrl.remove
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  collectionsCtrl.delete
)

module.exports = router
