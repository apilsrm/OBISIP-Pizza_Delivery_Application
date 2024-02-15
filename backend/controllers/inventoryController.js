import PizzaOrder from "../models/pizzaOrder.js";

//to create the inventory
export const createInventory = async (req, res, next) => {
  try {
    const pizzaOrder = new PizzaOrder(req.body);
    await pizzaOrder.save();

    res.status(201).json({
      success: true,
      message: "product create successFully",
      pizzaOrder,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


//controller method to get current inventory
export const getInventory = async (req, res, next) => {
  try {
    //fetch current inventory from db 
    const inventory = await Inventory.find();

    //return current inventory as inventory
    res.status(200).json({
      success: true,
      message: "all products get successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


//to create  the custome pizza
export const createCustomPizzaOrder = async (req, res, next) => {
    try {
      //extract user id from the aauthenticated user
      const userId = req.user.id;


      // extract custmization details from request body
      const { base, sauce, cheese, veggies, meat } = req.body;

      //calculate the total price based on the selected options
      const totalPrice = calculateTotalPrice(base, sauce, cheese, veggies, meat);

      //create a new order
      const order = new Order({
              user: userId,
              items: [{
                name: 'Custom Pizza',
                quantity: 1
              }],
              totalPrice,
              status: 'order_received'
      });


      //save the order to the db
       await order.save();
  
      
      //return updated inventory  and message
      res.status(200).json({
        success: true,
        message: "Custom pizza order placed successfully",
        order,

      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };


//helper fxn to calculate price 
const calculateTotalPrice = (base, sauce, cheese, veggies, meat) => {

//placeholder fro actual base price
const basePrice = Math.floor(Math.random() * 10) + 5;   //random base price between 5 and 15


//placeholder prices for base, sauce, cheese, veggies, meat
const saucePrice = 2;
const cheesePrice = 3;
const veggiesPrice = veggies.length * 1.5; //$1.50 per veggie
const meatPrice = meat.length * 2; //$2per meat


 
const totalPrice = basePrice + saucePrice + cheesePrice + veggiesPrice ;
const totalPrice1 = basePrice + saucePrice + cheesePrice + meatPrice ;

return( totalPrice || totalPrice1 ) ;


};