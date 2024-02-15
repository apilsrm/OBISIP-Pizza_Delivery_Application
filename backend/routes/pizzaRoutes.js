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
const router = express.Router();

//create pizza
router.post('/create/pizza',upload.single("pizzaImg"), createPizza);

//get all pizza 
router.get('/get/pizzas',allPizzas);

//delete pizza
router.delete('delete/pizzas/:id',deletePizza);

//admin get all products

router.route("/all/admin/pizzas").get( allPizzasAdmin);



export default router;

