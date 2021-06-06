const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment_data: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

mongoose.model("Comment", commentSchema)
