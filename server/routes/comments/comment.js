const router = require('express').Router()
const auth = require('../../middleware/auth')
const mongoose = require('mongoose')
const Comment = mongoose.model("Comment")

router.get('/', auth, async (req,res)=>{
    try {
        const comment = await Comment.find().populate('postedBy', '_id name email')
        if(comment){
            res.status(200).json(comment)
        }else{
            return res.status(400).json({msg: "No Comments Found"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/', auth, async (req,res)=>{
    try {
        const {comment_data} = req.body
        if(!comment_data){
            return res.status(400).json({msg: "Please Enter the required field"})
        }

        const newComment = new Comment({
            comment_data,
            postedBy: req.user.id
        })

        await newComment.save()

        res.status(201).json({msg: "User Commented Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/:id', auth, async (req,res)=>{
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id)
        if(comment){
            res.status(200).json({msg: "Comment Deleted Successfully..."})
        }else{
            return res.status(400).json({msg: "Error while deleting comment"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router