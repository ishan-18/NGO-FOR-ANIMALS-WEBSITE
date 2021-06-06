const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    s_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    s_title: {
        type: String,
        required: true,
        trim: true,
    },
    s_price: {
        type: Number,
        required: true,
        trim: true,
    },
    s_desc: {
        type: String,
        required: true,
    },
    s_images: {
        type: Object,
        required: true,
    },
    s_content: {
        type: String,
        required: true
    },
    s_category: {
        type: String,
        required: true
    }, 
    s_checked: {
        type: Boolean,
        default: false
    },
    s_sold: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

mongoose.model("Store", storeSchema)