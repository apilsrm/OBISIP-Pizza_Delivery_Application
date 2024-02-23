
import { tryCatchAsyncError } from "../middlewares/tryCatchAsyncError.js";
import CustomPizza from "../models/customPizza.js";
import StockPizza from "../models/stock.js";
import ErrorHandle from "../utils/errorHandler.js";



// Middleware to check stock levels and send notifications to admin if below a certain limit
// export const checkStockLevels = async (req, res, next) => {
//   try {
//     // Get current stock amounts from the database
//     const stock = await CustomPizza.findOne();

//     // Check if any stock is below the limit (e.g., 20)
//     if (stock.baseStock < 20 || stock.sauceStock < 20 || stock.cheeseStock < 20 || stock.veggiesStock < 20 || stock.meatStock < 20) {
//       // Send notification to admin 
//       console.log("Stock is below the limit. Please update stock amounts.");
//     }

//     next(); // Continue to the next middleware/controller
//   } catch (error) {
//     console.error("Error checking stock levels:", error);
//     next(new ErrorHandle("Failed to check stock levels", 500));
//   }
// };



//to create  the custome pizza
export const createCustomPizza = tryCatchAsyncError(async (req, res, next) => {
   
  //extract user id from the aauthenticated user
  // const userId = req.user.id;
  // console.log(userId);

   // extract custmization details from request body
   const { base, sauce, cheese, veggies, meat, size, quantity, pizzaName ,totalPrice ,user } = req.body;

    //create a new order
    const customPizza = await CustomPizza.create({
      // user: userId,
      user,
      base,
      sauce,
      cheese,
      veggies,
      meat,
      size,
      quantity,
      pizzaName,
      totalPrice,
       // Assuming quantity is always 1 for each custom pizza
      baseStock: 0, // Initialize stock count to 0 (assuming you have initial stock counts)
      sauceStock: 0,
      cheeseStock: 0,
      veggiesStock: 0,
      meatStock: 0
});

// await customPizza.save();

// Update stock of ingredients
// await updateStock(base, sauce, cheese, veggies, meat);

// const stokePizza = await StockPizza.updateOne(
//  {
//       baseStock: -1,
//       sauceStock: -1,
//       cheeseStock: -1,
//       veggiesStock: -1,
//       meatStock: -1
//     }
// );

// await checkStockLevels();

res.status(201).json({
  success: true,
  message: "Custom pizza crete successfully",
  customPizza,

});
});

// Function to update stock of ingredients when a custom pizza is created
// const updateStock = async (base, sauce, cheese, veggies, meat) => {
//   try {
//     // Update stock for each ingredient based on the quantity used in the custom pizza
//     await CustomPizza.updateOne(
//       {},
//       {
//         $inc: {
//           baseStock: -1,
//           sauceStock: -1,
//           cheeseStock: -1,
//           veggiesStock: -1,
//           meatStock: -1
//         }
//       }
//     );

//     // next();
//     // You may need to update the above logic based on your actual implementation
//   } catch (error) {
//     console.error("Error updating stock:", error);
//     throw new Error("Failed to update stock");
//   }
// };



// delete custom pizza
export const delteCustomPizza = tryCatchAsyncError(async (req, res, next) => {
   
  const pizzaId = req.params.id;
    const pizzadel = await CustomPizza.findById( pizzaId );
    if(!pizzadel){
        return next(new ErrorHandle("Product not found",404));
      }

  //delete from database 
  await pizzadel.deleteOne();
  res.status(200).json({
    success: true,
    message: "product delete successfullly ",
    pizzadel,
  });

});

// getAll
// to get all pizzas
export const allCPizzas =  tryCatchAsyncError(async (req, res, next) => {
  
  //fetch all pizzas from db
  const pizzas = await CustomPizza.find();
  if (!pizzas) return next(new ErrorHandle("Product not found", 400));

  //return the list of pizzas as pizzas
  res.status(201).json({
    success: true,
    message: "all products get successfully",
    pizzas,
  });

});


// Controller to update stock amounts by admin
export const createStockByAdmin = tryCatchAsyncError(async (req, res, next) => {

  // Check if the user is an admin 
  // const isAdmin = req.user.id; 

  // if (!isAdmin) {
  //   return next(new ErrorHandle("Unauthorized access", 403));
  // }

  // Get stock amounts from request body
  const { baseStock, sauceStock, cheeseStock, veggiesStock, meatStock } = req.body;

  // Update stock amounts in the database
  const pizza = await StockPizza.create(
    {
        baseStock,
        sauceStock,
        cheeseStock,
        veggiesStock,
        meatStock

    }
  );

  res.status(200).json({
    success: true,
    message: "Stock create  successfully",
    pizza
  });

});


// export const updateStockByAdmin = tryCatchAsyncError(async (req, res, next) => {

//     // Check if the user is an admin 
//     // const isAdmin = req.user.id; 

//     // if (!isAdmin) {
//     //   return next(new ErrorHandle("Unauthorized access", 403));
//     // }
// const stockPizza = await StockPizza.find();

//     // Get stock amounts from request body
//     const { baseStock, sauceStock, cheeseStock, veggiesStock, meatStock } = req.body;

//     // Update stock amounts in the database
//     // await StockPizza.updateOne(
//     //   {},
//     //   {
//     //     $set: {
//     //       baseStock,
//     //       sauceStock,
//     //       cheeseStock,
//     //       veggiesStock,
//     //       meatStock
//     //     }
//     //   }
//     // );
   
//     stockPizza.baseStock = baseStock;
//     stockPizza.sauceStock=  sauceStock;
//     stockPizza.cheeseStock=  cheeseStock;
//     stockPizza.veggiesStock=  veggiesStock;
//     stockPizza.meatStock=  meatStock;


//     await stockPizza.save();

//     res.status(200).json({
//       success: true,
//       message: "Stock amounts updated successfully",
//       stockPizza
//     });

// });





