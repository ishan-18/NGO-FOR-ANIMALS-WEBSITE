const router = require('express').Router()
const auth = require('../../middleware/auth')
const authAdmin = require('../../middleware/authAdmin')
const mongoose = require('mongoose')
const s_Category = mongoose.model("s_Category")

router.get('/s_category', auth, async (req,res)=>{
    try {
        const category = await s_Category.find()
        if(category){
            res.status(200).json(category)
        }else{
            return res.status(500).json({msg: "No Categories found"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/s_category', auth, authAdmin, async (req,res)=>{
    try {
        const {s_name} = req.body
        if(!s_name){
            return res.status(400).json({msg: "Please enter the name field"})
        }

        const category = await s_Category.findOne({s_name})
        if(category){
            return res.status(400).json({msg: "Category already exists"})
        }

        const newSCategory = new s_Category({
            s_name
        })

        await newSCategory.save()

        res.status(201).json({msg: "Store Category Uploaded Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/s_category/:id', auth, authAdmin, async (req,res)=>{
    try {
        const category = await s_Category.findByIdAndDelete(req.params.id)
        if(category){
            res.status(200).json({msg: "Category Deleted Successfully"})
        }else{
            return res.status(400).json({msg: "Error while Deleting Category"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.put('/s_category/:id', auth, authAdmin, async (req,res)=>{
    try {
        const {s_name} = req.body
        if(!s_name){
            return res.status(400).json({msg: "Please enter the name field"})
        }

        await s_Category.findOneAndUpdate({_id: req.params.id}, {
            s_name
        })

        res.status(201).json({msg: "Category Updated Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router