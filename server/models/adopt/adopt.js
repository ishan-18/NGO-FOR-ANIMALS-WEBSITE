const mongoose = require('mongoose')

// Adopt backend keyword=schema
const adoptSchema = new mongoose.Schema({
    a_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    a_title: {
        type: String,
        required: true,
        trim: true,
    },
    a_price: {
        type: Number,
        required: true,
        trim: true,
    },
    a_desc: {
        type: String,
        required: true,
    },
    a_images: {
        type: Object,
        required: true,
    },
    a_address: {
        type: String,
        required: true
    },
    a_category: {
        type: String,
        required: true
    }, 
    a_checked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

mongoose.model("Adopt", adoptSchema)