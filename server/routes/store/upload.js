const router = require('express').Router();
const cloudinary = require('cloudinary');
const auth = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');
const path = require('path')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

router.post('/upload', auth, authAdmin, async (req,res)=>{
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length == 0){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "No files chosen"})
        }

        const file = req.files.file;
        if(file.size > 1024* 1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File size is too large"})
        }

        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File format is incorrect"})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async (err,result)=>{
            try {
                if(err) throw err
                
                removeTmp(file.tempFilePath)

                res.json({public_id: result.public_id, url: result.secure_url})
            } catch (err) {
                return res.status(500).json({err: err.message})
            }
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/destroy', auth, authAdmin, async (req,res)=>{
    try {
        const {public_id} = req.body
        if(!public_id){
            return res.status(400).json({msg: "No Images Selected"})
        }
        cloudinary.v2.uploader.destroy(public_id, async (err,result)=>{
            if(err) throw err

            res.json({msg: "Image Deleted Successfully"})
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err
    })
}

module.exports = router