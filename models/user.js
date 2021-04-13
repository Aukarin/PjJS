const { Schema, model } = require('mongoose')

const UserListItemSchema = new Schema({
   
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

const UserketListItem = model('useketListItems', UserListItemSchema)

module.exports = UserketListItem
