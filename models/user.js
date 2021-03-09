const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : {
       type : String,
       required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        Default : Date.now
    },
    isadmin:{
        type : Boolean,
        Default : false
    }
});
module.exports = user = mongoose.model('user' , UserSchema); 