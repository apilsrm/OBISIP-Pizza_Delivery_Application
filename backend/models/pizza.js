// const mongoose = require('mongoose');


// const  pizzaSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             require:  [true, "please filled productName"],   
//         },
//         description:{
//             type: String,
//             require: [true, "please filled product description here"], 
//         },
//         price:{
//             type: Number,
//             require: [true, "Price field must be filled"],
//         },
//     },
//     { timestamps: true }
// );

// const Pizza =  new mongoose.model('Pizza', pizzaSchema);

// module.exports = Pizza;


import mongoose from "mongoose";
const  pizzaSchema = new mongoose.Schema(
        {
            name: {
                type: String,
                require:  [true, "please filled productName"],   
            },
            description:{
                type: String,
                require: [true, "please filled product description here"], 
            },
            price:{
                type: Number,
                require: [true, "Price field must be filled"],
            },
        },
        { timestamps: true }
    );

const Pizza =  new mongoose.model('Pizza', pizzaSchema);
export default Pizza;