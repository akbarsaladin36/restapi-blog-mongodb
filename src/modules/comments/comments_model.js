const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        comment_description: {
            type: String,
        },
        comment_user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        blog: {
            type: Schema.Types.ObjectId,
            ref: 'blogs'
        }

    },
    { 
        timestamps: true
    }
)

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment