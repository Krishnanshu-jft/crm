const mongoose = require('mongoose');

const { createIndexes } = require('../models/user');

const db = 'mongodb+srv://krishnanshu:krish143@cluster0.wxqsk.mongodb.net/krish?retryWrites=true&w=majority';

const connectDB = async () =>{
    try{
        await mongoose.connect(db , {
            useUnifiedTopology: true,
            useNewUrlParser: true ,
            useCreateIndex: true,
            useFindAndModify: false
        }); //here i am connected
        console.log('Finally i am connected with database');
    }catch(err){
         console.log(err.message);
         process.exit(1); //here i exited when find the error
    }
}
module.exports = connectDB;