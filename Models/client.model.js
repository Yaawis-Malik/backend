import mongoose from "mongoose";

const clientSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter your name']
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required: [true, 'enter your number'],
    },
    services: {
        type: Array,
        required: [true, 'Select Services'],
    },
    other_service: {
        type: Object,
    },
    description: {
        type: String,
        required: [true, 'Enter Your Text'],
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    projectName:{
        type: String,
        required: true
    },
    files: {
        type: String,
        required: [true],
    },
    budget:{
        type: Number,
        required: true,
    },

});

const Client = mongoose.model('Client', clientSchema);

export default Client;