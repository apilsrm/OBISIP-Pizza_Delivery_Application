import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { tryCatchAsyncError } from "./tryCatchAsyncError.js";
import ErrorHandle from "../utils/errorHandler.js";

export  const isAuthenticated = tryCatchAsyncError(async(req, res, next) => {
    const token = req?.headers?.authorization?.replace("Bearer ","")
    if(!token){

    return  next(new ErrorHandle("Please login  first",401))
    }

    //token verify
    const decodeData = jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(decodeData.id)
    if(!user){
    return  next(new ErrorHandle("User dont exist",400))
    }

    req.user = user;
    next(); //call back function//


})

//role base authentication
//admin

export const isAuthAdmin = tryCatchAsyncError( async(req,res,next) => {

    //must be check login / authenticated
    if(!req.user){
    return  next(new ErrorHandle("You must be authenticated to acces this resources",401))
    }
     //check admin 
    if(req.user.role !== "admin"){
    return  next(new ErrorHandle(`${req.user.role} is not authorize to access this resource!`,403))
    }
    next();
    /* forbedden  403 */
})

