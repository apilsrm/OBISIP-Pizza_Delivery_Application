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
const pizzaSchema = new mongoose.Schema({
  pizzaName: {
    type: String,
    require: [true, "please filled productName"],
  },
  description: {
    type: String,
    require: [true, "please filled product description here"],
  },
  category: {
    type: String,
    required: [true, "Please select a category "],
  },
  pizzaImg: {
    url: {
      type: String,
    },
  },
  isInStock: {
    type: Number,
    required: [true, "Please enter the product stock"],
  },
  price: {
    type: Number,
    require: [true, "Price field must be filled"],
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

const Pizza = new mongoose.model("Pizza", pizzaSchema);
export default Pizza;
