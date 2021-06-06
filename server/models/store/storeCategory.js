const mongoose = require('mongoose')

const storeCategory = new mongoose.Schema({
    s_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

mongoose.model("s_Category", storeCategory)