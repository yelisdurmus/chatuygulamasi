const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const findOrCreate=require('mongoose-find-or-create');
const userSchema=new Schema({
    googleId:{
        type:String,
        useCreateIndex:true
    },
    name:String,
    surname:String,
    profilePhotoUrl:String
});

userSchema.plugin(findOrCreate);
module.exports=mongoose.model('users',userSchema);