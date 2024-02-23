// const express = require("express");
// const router = express.Router();

// import {createPizza, getPizza} from '../controllers/pizzaController'

// //create pizza

// router.post('/create/pizza', createPizza);

// //get all pizza 
// router.get('/get/pizzas',getPizza);


// module.exports =router;

import express  from "express";
import upload from "../file/upload.js"
import {allPizzas, allPizzasAdmin, createPizza, deletePizza, } from '../controllers/pizzaController.js'
import { allCPizzas, createCustomPizza, delteCustomPizza, createStockByAdmin } from "../controllers/customPizzaController.js";
// import { createCustomPizza ,createStockByAdmin} from "../controllers/customPizzaController.js";
const router = express.Router();

//create pizza
router.post('/create/pizza',upload.single("pizzaImg"), createPizza);

//get all pizza 
router.get('/get/pizzas',allPizzas);

//delete pizza
router.delete('delete/pizzas/:id',deletePizza);

//admin get all products
router.route("/all/admin/pizzas").get( allPizzasAdmin);

//custom pizza routes
router.post('/customPizza', createCustomPizza);

router.delete('delete/pizzas/:id',delteCustomPizza);

//by admins
router.get('/get/cpizzas',allCPizzas);

router.route("/create/stock").post(createStockByAdmin);
// router.route("/update/stock").put( updateStockByAdmin);

export default router;

