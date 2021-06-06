const router = require('express').Router()
const auth = require('../../middleware/auth')
const authAdmin = require('../../middleware/authAdmin')
const mongoose = require('mongoose')
const Adopt = mongoose.model("Adopt")

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filtering(){
        const queryObj = {...this.queryString}
        const excludedFields = ['page','sort','limit'];
        excludedFields.forEach(el=> delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj);

        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this;
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt') 
        }

        return this;
    }
    paginating(){

        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit) 


        return this;
    }

}

router.get('/', auth, async (req,res)=>{
    try {
        const features = new APIfeatures(Adopt.find(), req.query).filtering().sorting().paginating()
        const adopt = await features.query
        if(adopt){
            res.status(200).json({
                status: 'success',
                result: adopt.length,
                adopt
            });
        }else{
            return res.status(400).json({msg: "No Gigs Found"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/', auth, authAdmin, async (req,res)=>{
    try {
        const {a_id, a_title, a_price, a_desc, a_images, a_address, a_category} = req.body
        if(!a_id || !a_title || !a_price || !a_desc || !a_address || !a_category){
            return res.status(400).json({msg: "Please Enter all the fields"})
        }

        if(!a_images){
            return res.status(400).json({msg: "No Images Uploaded"})
        }

        const adopt = await Adopt.findOne({a_id})
        if(adopt){
            return res.status(400).json({msg: "This Gig already exists"})
        }

        const newAdopt = new Adopt({
            a_id,
            a_title,
            a_price,
            a_desc,
            a_images,
            a_address, 
            a_category
        })

        await newAdopt.save()

        res.status(201).json({newAdopt, msg: "Gig Uploaded Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/:id', auth, authAdmin, async (req,res)=>{
    try {
        const adopt = await Adopt.findByIdAndDelete(req.params.id)
        if(adopt){
            res.status(200).json({msg: "Gig Deleted Successfully..."})
        }else{
            return res.status(400).json({msg: "Error while deleting gig"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.put('/:id', auth, authAdmin, async (req,res)=>{
    try {
        const {a_id, a_title, a_price, a_desc, a_images, a_address, a_category} = req.body
        if(!a_id || !a_title || !a_price || !a_desc || !a_address || !a_category){
            return res.status(400).json({msg: "Please Enter all the fields"})
        }

        if(!a_images){
            return res.status(400).json({msg: "No Images Uploaded"})
        }

        await Adopt.findOneAndUpdate({_id: req.params.id}, {
            a_id, a_title, a_price, a_desc, a_images, a_address, a_category
        })

        res.status(201).json({msg: "Gig Updated Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router