const mongoose = require('mongoose')


const adoptCategory = new mongoose.Schema({
    ac_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
})

mongoose.model('a_Category', adoptCategory)