const mongoose = require('mongoose');
const { createIndexes } = require('../models/user');
const db = 'mongodb+srv://krishnanshu:krishnanshu@cluster0.gbrwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectDB = async () =>{
    try{
        await mongoose.connect(db , {
            useUnifiedTopology: true,
            useNewUrlParser: true ,
            useCreateIndex: true,
            useFindAndModify: false
        }); 
        console.log('Connection Established');
    }catch(err){
         console.log(err.message);
         console.log('Process Exit')
         process.exit(1); 
    }
}
module.exports = connectDB;