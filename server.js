const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')

// @Application Configurations
const app = express()
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())

// @Connection to database
const connectDB = require('./config/db');
const path = require('path');
connectDB();

// @Controllers
// @Load User Routes
const user = require('./controllers/User.js')
// Fire Up User routes
app.use('/user', user)

// ENVIRONMENT PORT
const PORT = process.env.PORT || 8999
app.listen(PORT, ()=>{
    console.log(`Server Running at port ${PORT}`)
})