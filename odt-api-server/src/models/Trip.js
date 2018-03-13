const mongoose = require('mongoose');

const Trip = mongoose.model('Trip', {
    from: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    to: {
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    meetingpoint:{
        type: String,
        trim: true,
    },
   price: {
        type: Number,
        required:true,
    },
    departureDate: {
        type: Date,
        required:true,

    },
    returnDate: {
        type: Date,
        required:true,
    },
    seats: {
        type: Number,
    },
    distance: {
        type: Number,
        required:true,
    },
    tripTime: Number,
    description: String,
    creator: Objectid,
    passengers: Array

});

modules.export = Trip;