const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
   
    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Tel: {
        type: String,
        required: true,
    },
    
    Email: {
        type: String,
        required: true,
    },
    
    
   
})

const User = model('user', UserSchema)

module.exports = User
