// const Pizza = require('../models/pizza')
import Pizza from '../models/pizza.js';


export const createPizza = async(req, res, next) => {
    try {
        //extract pizza details form the request body
        const {name, description, price}= req.body;


          //create new pizza in db
        const pizza = await Pizza.create({name, description, price });


        //return the created pizza
        // res.status(201).json(pizza);  
        res.status(201).json({
            success: true,
            message: "product create successFully",
            pizza,
          });  
              
    } catch (error) {
        //pass error to error handlermiddleware
        next(error)
        
    }
};


//to get all pizzas

export const getPizza =async(req, res, next) => {
    try {
        //fetch all pizzas from db
        const pizzas = await Pizza.find();

        //return the list of pizzas as pizzas
        res.status(200).json({
            success: true,
            message: "all products get successfully",
            pizzas,
          });

    } catch (error) {
        //pass error to error handlermiddleware
        next(error)
    }
};