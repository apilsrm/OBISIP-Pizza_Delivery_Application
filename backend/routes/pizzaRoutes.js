// const express = require("express");
// const router = express.Router();

// import {createPizza, getPizza} from '../controllers/pizzaController'

// //create pizza

// router.post('/create/pizza', createPizza);

// //get all pizza 
// router.get('/get/pizzas',getPizza);


// module.exports =router;

import express  from "express";
const router = express.Router();
import {createPizza, getPizza} from '../controllers/pizzaController.js'

//create pizza
router.post('/create/pizza', createPizza);

//get all pizza 
router.get('/get/pizzas',getPizza);



export default router;

