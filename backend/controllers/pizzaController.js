// const Pizza = require('../models/pizza')
import Pizza from "../models/pizza.js";
import path from "path";
import { join } from "path";
import fs, { rmSync } from "fs";
import { unlink } from "fs/promises";
import { url } from "inspector";
import ErrorHandle from "../utils/errorHandler.js";
import { tryCatchAsyncError } from "../middlewares/tryCatchAsyncError.js";

// import PizzaOrder from "../models/pizzaOrder.js";



export const createPizza = tryCatchAsyncError(async (req, res, next) => {
  //extract pizza details form the request body
  const { pizzaName, description, price, category, isInStock } = req.body;

  // if (!pizzaName || !description || !price || !category || !isInStock) {
  //   if (req.file) {
  //     await unlink(req.file.path);
  //   }
  //   return next(new ErrorHandle("filled must be filled", 400));
  // }

  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 5000
  }`;
  const imagePath = req.file.filename;
  let pizzaImageUrl;

  if (imagePath) {
    pizzaImageUrl = `${baseUrl}/gallery/${imagePath}`.replace(/\\/g, "/");
  }
  // join(baseUrl, "gallery", imagePath).replace(/\\/g, "/");

  //create new pizza in db
  const pizza = await Pizza.create({
    pizzaName,
    description,
    price,
    category,
    isInStock,
    pizzaImg: pizzaImageUrl ? { url: pizzaImageUrl } : undefined,
  });

  //return the created pizza
  // res.status(201).json(pizza);
  res.status(201).json({
    success: true,
    message: "pizza create successFully",
    pizza,
  });
});

// export const createCustomPizza = tryCatchAsyncError(async (req, res, next) => {
   
//   //extract user id from the aauthenticated user
//   const userId = req.user.id;

//    // extract custmization details from request body
//    const { base, sauce, cheese, veggies, meat ,size } = req.body;

//     //create a new order
//     const customPizza = new PizzaOrder.create({
//       user: userId,
//       base,
//       sauce,
//       cheese,
//       veggies,
//       meat,
//       size,
// });

// res.status(201).json({
//   success: true,
//   message: "Custom pizza crete successfully",
//   customPizza,

// });
// });








// //to get all pizzas
// export const allPizzas = async (req, res, next) => {
//   try {
//     //fetch all pizzas from db
//     const pizzas = await Pizza.find();
//     if (!pizzas) return next(new ErrorHandler("Product not found", 400));

//     //return the list of pizzas as pizzas
//     res.status(201).json({
//       success: true,
//       message: "all products get successfully",
//       pizzas,
//     });
//   } catch (error) {
//     //pass error to error handlermiddleware
//     next(error);
//   }
// };

//to get all pizzas
export const allPizzas =  tryCatchAsyncError(async (req, res, next) => {
  
    //fetch all pizzas from db
    const pizzas = await Pizza.find();
    if (!pizzas) return next(new ErrorHandle("Product not found", 400));

    //return the list of pizzas as pizzas
    res.status(201).json({
      success: true,
      message: "all products get successfully",
      pizzas,
    });
 
});


//delete
export const deletePizza = tryCatchAsyncError(async (req, res, next) => {

    const pizzaId = req.params.id;
    const pizzadel = await Pizza.findById( pizzaId );
    if(!pizzadel){
        return next(new ErrorHandle("Product not found",404));
      }

      const existingImageUrl = pizzadel.pizzaImg.url;

      // url check then gallery ma delete 
      if(existingImageUrl){
        const filename = path.basename(existingImageUrl);
        const previousImagePath = path.join("public", "gallery", filename)
        fs.unlinkSync(previousImagePath);
      }
       //delete from database 
       await pizzadel.deleteOne();
        res.status(200).json({
          success: true,
          message: "product delete successfullly ",
          pizzadel,
        });
        


})



//get pizza by admin

export const allPizzasAdmin = tryCatchAsyncError(async(req, res, next) => {
    const  pizzas = await Pizza.find()
    if(!pizzas) return next(new ErrorHandle("Product not found", 400));
  
    res.status(200).json({
      success:true,
      message:"all data fecth successfully",
      data:pizzas,
    })
  })
