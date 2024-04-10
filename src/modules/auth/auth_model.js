const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        user_username: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true
        },
        user_password: {
            type: String,
            required: true
        },
        user_first_name: {
            type: String
        },
        user_last_name: {
            type: String
        },
        user_address: {
            type: String
        },
        user_phone_number: {
            type: String
        },
        user_avatar_image: {
            type: String
        }
    },
    { 
        timestamps: true
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User

