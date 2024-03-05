const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const middleware = require('../middleware')

router.put('/:id/reply', commentsCtrl.reply)
router.get('/:id', commentsCtrl.getComment)

module.exports = router
