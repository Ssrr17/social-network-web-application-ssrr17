const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true

    },  
     email:{
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
     },
     thoughts:[{
         type: Schema.Types.ObjectId,
         ref: 'Thoughts'
     }],
     friends:[{
         type: Schema.Types.ObjectId,
        ref: 'User'
     }]

});

// get total count of friends


// create the Users model using the Users Schema
const User = model('User', UserSchema);

// Export Users module
module.exports = User;