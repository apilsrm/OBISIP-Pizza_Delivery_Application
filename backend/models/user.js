import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        required:[true, "enter the full name"]
    },
    email:{
        type:String,
        required:[true,"please enter valid email"],
        unique:[true,"email already exits"],
    },
    mobileNo:{
        type:Number,
        required:[true,"please enter valid mobile number"],
        unique:[true,"Mobile Number already exits"],

    },
    password:{
        type:String,
        required:[true,"please enter valid mobile number"],
        select:false,

    },
    avatar:{
        url:{
            type:String,

        }
    },
    role:{
        type:String,
        enum:["admin",'user'],
        default:"user",
    },
    verified:{
        type:String,
        default:false,
    },
    token:{
        type:String,
        default:'',
    }


},{timestamps:true}
)

//before save document in db

//hashed password
userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

//generate token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"2h"})


}


//compared password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};




const User = new mongoose.model('user', userSchema);
export default User;

