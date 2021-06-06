const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    role: {
        type: Number,
        default: 0 // user's role = 0 and admin's role = 1
    },
    cart: {
        type: Array,
        default: []
    }
},{
    timestamps: true
})

mongoose.model("User", userSchema)