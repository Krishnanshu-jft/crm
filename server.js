const express    = require('express'),
      bodyParser = require('body-parser'),
      cors       = require('cors')

// @Application Configurations
const app = express()
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())

const connectDB = require('./config/db');
const path = require('path');
// Load User Routes
const user = require('./controllers/User.js')

connectDB();

app.use(express.json({extended : false}));

// Fire Up User routes
app.use('/user', user)

// ENV PORT
const PORT = process.env.PORT || 8999
app.listen(PORT, ()=>{
    console.log(`Server Running at port ${PORT}`)
})