const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    surname: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    picture:{
        type: String,
        trim: true,
        default: 'https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-48.png'
    },
    email: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    username: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required:true,
        minlength: 1,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comments: {
        userId: String,
        date: Date,
        comment: String
    }

});

module.exports = User;