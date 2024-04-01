import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'

const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter your name']
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please enter your valid email']
    },
    phone: {
        type: Number,
        required: [true, 'enter your number'],
        minlength: 11,
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: 8
    }
});


userSchema.pre('save', async function (next){
    try {
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error.message)
    }
})


const User = mongoose.model('User', userSchema);

export default User;