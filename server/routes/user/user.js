const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')


//Here Users will register, Routes for users to register
router.post('/register', async (req,res)=>{
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({msg: "Please Enter all the fields"})
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg: "User already exists"})
        }

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return res.status(400).json({msg: "Invalid Email"})
        }

        if(password.length < 6){
            return res.status(400).json({msg: "Password must be greater then 6 characters"})
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            name,
            email,
            password: hashPassword,
        })

        await newUser.save()

        const accesstoken = createAccessToken({id: newUser._id})
        const refreshtoken = createRefreshToken({id: newUser._id})

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/user/refresh_token'
        })
        
        res.status(201).json({msg: "User Registered Successfully...", accesstoken})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/login', async (req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg: "Please Enter all the fields"})
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg: "User with this email doesn't exists"})
        }

        if(password.length < 6){
            return res.status(400).json({msg: "Password must contain atleast 6 characters"})
        }

        const doMatch = await bcrypt.compare(password, user.password)
        if(doMatch){
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.status(200).json({msg: "User Login Successfull...", accesstoken})
        }else{
            return res.status(400).json({msg: "Invalid Email or Password"})
        }

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.get('/refresh_token', async (req,res)=>{
    try {
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token){
            return res.status(400).json({msg: "Please Login or Register"})
        }else{
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
                if(err) throw err.message

                const accesstoken = createAccessToken({id: user.id})
                res.status(200).json({user, accesstoken})
            })
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.get('/logout', async (req,res)=>{
    try {
        res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
        return res.status(200).json({msg: "User Logged out Successfully..."})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.get('/infor', auth, async (req,res)=>{
    try {
        const user = await User.findById(req.user.id)
        if(user){
            res.status(200).json({user})
        }else{
            return res.status(400).json({msg: "User doesn't exists"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}



module.exports = router