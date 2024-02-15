import ErrorHandle from "../utils/errorHandler.js";

export const errorListening = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error"

    //wrong mongodb error
    if(err.name === "CastError"){
        const message = `Resources not found: ${err.path}`;
        err = new ErrorHandle(message, 400); 
    }


    //Duplicate error
    if(err.code === 11000){
        const message = `Duplicate:${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandle(message,400)
    }

    //jsonwebtoken error
    if(err.name === "JsonWebTokenError"){
        const message = `Invalid token, try again`
        err = new ErrorHandle(message,400)

    }

    //token expired
    if(err.name === "TokenExpiredError"){
        const message = `Token has been expired!`
        err = new ErrorHandle(message,400)

    }


    //to show msg in json formate
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    }) 
}