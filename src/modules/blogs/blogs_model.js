const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
        blog_title: {
            type: String,
        },
        blog_description: {
            type: String,
        },
        blog_tags: {
            type: String,
        },
        blog_user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }]
    },
    { 
        timestamps: true
    }
)

const Blog = mongoose.model('blogs', blogSchema)

module.exports = Blog

