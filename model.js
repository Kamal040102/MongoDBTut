const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        required:true, 
        type:String
    },
    contact: {
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('User', userSchema);