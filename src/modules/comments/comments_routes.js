const express = require('express')
const router = express.Router()
const commentsController = require('./comments_controller')
const authMiddleware = require('../../middleware/auth')

router.get('/:blogId',authMiddleware.userAuthentication,commentsController.allComments)
router.post('/',authMiddleware.userAuthentication,commentsController.createComment)

module.exports = router