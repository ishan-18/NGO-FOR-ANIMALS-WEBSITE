require('dotenv').config()

const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Models
require('./models/user/user')
require('./models/adopt/adoptCategory')
require('./models/adopt/adopt')
require('./models/store/storeCategory')
require('./models/store/store')
require('./models/comment/comment')

//Routes
app.use('/user', require('./routes/user/user'))
app.use('/adopt', require('./routes/adopt/adoptCategory'))
app.use('/adopt', require('./routes/adopt/upload'))
app.use('/adopt', require('./routes/adopt/adopt'))
app.use('/store', require('./routes/store/storeCategory'))
app.use('/store', require('./routes/store/upload'))
app.use('/store', require('./routes/store/store'))
app.use('/comment', require('./routes/comments/comment'))

const mongo_URI = process.env.MONGO_URI
// Database running
mongoose.connect(mongo_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', ()=>{
    console.log('Database running @27017')
})

mongoose.connection.on('error', (err)=>{
    console.log("Error", err)
})

//Server Started
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server responding @${PORT}`)
})