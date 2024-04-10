const express = require('express')
const router = express.Router()
const blogController = require('./blogs_controller')
const authMiddleware = require('../../middleware/auth')

router.get('/',authMiddleware.userAuthentication,blogController.allBlogs)
router.post('/',authMiddleware.userAuthentication,blogController.createBlog)
router.get('/:id',authMiddleware.userAuthentication,blogController.oneBlog)
router.patch('/:id',authMiddleware.userAuthentication,blogController.updateBlog)
router.delete('/:id',authMiddleware.userAuthentication,blogController.deleteBlog)

module.exports = router