var mongoose = require('mongoose');
//var bcrypt=require('bcryptjs');

var Schema =mongoose.Schema;

//user schema has been created.. Blueprint of the table.
var userSchema = new Schema({
email_address:{
    type :String,
    required:true,
    unique:true
},
username:String,
password:String
});

//first arg:name of the model
//second arg: schema used
//third arg: collections to which schema has to be applied
var users=module.exports =mongoose.model('users',userSchema,'users');

