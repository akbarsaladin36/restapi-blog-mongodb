const express = require('express')
const Route = express.Router()
const authRoutes = require('../modules/auth/auth_routes')
const usersRoutes = require('../modules/users/users_routes')
const blogsRoutes = require('../modules/blogs/blogs_routes')
const commentsRoutes = require('../modules/comments/comments_routes')

Route.use('/auth', authRoutes)
Route.use('/users', usersRoutes)
Route.use('/blogs', blogsRoutes)
Route.use('/comments', commentsRoutes)


module.exports = Route