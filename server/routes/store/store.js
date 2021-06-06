const router = require('express').Router()
const auth = require('../../middleware/auth')
const authAdmin = require('../../middleware/authAdmin')
const mongoose = require('mongoose')
const Store = mongoose.model("Store")

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
        const features = new APIfeatures(Store.find(), req.query).filtering().sorting().paginating()
        const store = await features.query
        if(store){
            res.status(200).json({
                status: 'success',
                result: store.length,
                store
            });
        }else{
            return res.status(400).json({msg: "No Products Found"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/', auth, authAdmin, async (req,res)=>{
    try {
        const {s_id, s_title, s_price, s_desc, s_images, s_content, s_category} = req.body
        if(!s_id || !s_title || !s_price || !s_desc || !s_content || !s_category){
            return res.status(400).json({msg: "Please Enter All the fields"})
        }

        if(!s_images){
            return res.status(400).json({msg: "No Images Selected"})
        }

        const store = await Store.findOne({s_id})
        if(store){
            return res.status(400).json({msg: "Product Id Already exists"})
        }

        const newStore = new Store({
            s_id,
            s_title,
            s_price,
            s_desc,
            s_images,
            s_content,
            s_category
        })

        await newStore.save()

        res.status(201).json({msg: "Product Uploaded Successfully..."})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/:id', auth, authAdmin, async (req,res)=>{
    try {
        const store = await Store.findByIdAndDelete(req.params.id)
        if(store){
            res.status(200).json({msg: "Product deleted Successfully..."})
        }else{
            return res.status(400).json({msg: "Error while deleting products"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.put('/:id', auth, authAdmin, async (req,res)=>{
    try {
        const {s_id, s_title, s_price, s_desc, s_images, s_content, s_category} = req.body
        if(!s_id || !s_title || !s_price || !s_desc || !s_content || !s_category){
            return res.status(400).json({msg: "Please Enter All the fields"})
        }

        if(!s_images){
            return res.status(400).json({msg: "No Images Selected"})
        }

        await Store.findOneAndUpdate({_id: req.params.id}, {
            s_title, s_price, s_desc, s_images, s_content, s_category
        })

        res.status(201).json({msg: "Product Updated Successfully..."})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router

// "s_id": "1",
// 	"s_title": "Pedigree1",
// 	"s_price": "300",
// 	"s_desc": "Dog Food Dog Food Dog Food Dog Food",
// 	"s_images": {
// 	    "public_id": "test/moip30mrtiwhuuvv5x3s",
// 	    "url": "https://res.cloudinary.com/iiiiii/image/upload/v1622655779/test/moip30mrtiwhuuvv5x3s.png"
// 	},
// 	"s_content": "Dog Food Dog Food Dog Food Dog Food Dog Food",
// 	"s_category": "Food"