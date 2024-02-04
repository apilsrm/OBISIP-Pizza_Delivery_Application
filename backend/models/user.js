import mongoose from "mongoose";


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
    role:{
        type:String,
        enum:["admin",'user'],
        default:"user",
    }

},{ timestamps: true }
);

const User = new mongoose.model("User", userSchema);
export default User;

