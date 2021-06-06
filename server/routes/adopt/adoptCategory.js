const router = require('express').Router()
const mongoose = require('mongoose')
const auth = require('../../middleware/auth')
const authAdmin = require('../../middleware/authAdmin')
const a_Category = mongoose.model('a_Category')

router.get('/a_category', auth, async (req,res)=>{
    try {
        const category = await a_Category.find()
        if(category){
            res.status(200).json({category})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/a_category', auth, authAdmin, async (req, res)=>{
    try {
        const {ac_name} = req.body
        if(!ac_name){
            return res.status(400).json({msg: "Please Enter the name field"})
        }

        const category = await a_Category.findOne({ac_name})
        if(category){
            return res.status(400).json({msg: "Category already exists"})
        }

        const newACategory = new a_Category({
            ac_name
        })
        
        await newACategory.save()

        res.status(201).json({newACategory, msg: "Category Uploaded Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/a_category/:id', auth, authAdmin, async (req,res)=>{
    try {
        const category = await a_Category.findByIdAndDelete(req.params.id)
        if(category){
            res.status(200).json({msg: "Category Deleted Successfully"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.put('/a_category/:id', auth, authAdmin, async (req,res)=>{
    try {
        const {ac_name} = req.body
        if(!ac_name){
            return res.status(400).json({msg: "Please Enter the name field"})
        }

        await a_Category.findOneAndUpdate({_id: req.params.id}, {
            ac_name
        })

        res.status(201).json({msg: "Category Updated Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})


module.exports = router